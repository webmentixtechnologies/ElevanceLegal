<?php
/**
 * Elevance Legal Services - Client Enquiry Processor
 * Handles intake form submissions and dispatches notifications to paras@ranjaysolicitors.com
 */

header('Content-Type: application/json; charset=UTF-8');

// Allow CORS
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit;
}

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['success' => false, 'error' => 'Method Not Allowed']);
    exit;
}

$raw = file_get_contents('php://input');
$data = [];
if (!empty($raw) && ($json = json_decode($raw, true))) {
    $data = $json;
} else {
    $data = $_POST;
}

$name     = isset($data['name']) ? trim(strip_tags($data['name'])) : '';
$email    = isset($data['email']) ? trim(filter_var($data['email'], FILTER_SANITIZE_EMAIL)) : '';
$question = isset($data['question']) ? trim(strip_tags($data['question'])) : (isset($data['message']) ? trim(strip_tags($data['message'])) : '');
$phone    = isset($data['phone']) ? trim(strip_tags($data['phone'])) : 'Not provided';
$service  = isset($data['service']) ? trim(strip_tags($data['service'])) : 'Legal Services Consultation';

if (empty($name) || empty($email) || empty($question)) {
    http_response_code(400);
    echo json_encode(['success' => false, 'error' => 'Please provide your name, valid email address, and legal enquiry message.']);
    exit;
}

if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    http_response_code(400);
    echo json_encode(['success' => false, 'error' => 'Please enter a valid email address.']);
    exit;
}

// Target recipient
$to = 'paras@ranjaysolicitors.com';

// Subject line
$subject = "[Elevance Legal] New Legal Enquiry from " . $name;

$timestamp = date('d-M-Y H:i:s T');
$ip = $_SERVER['REMOTE_ADDR'] ?? 'Unknown';

// HTML Email Body
$htmlBody = <<<HTML
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <title>New Legal Enquiry</title>
  <style>
    body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; background-color: #000000; color: #e5e5e5; margin: 0; padding: 24px; }
    .card { max-width: 620px; margin: 0 auto; background: #0c0c0c; border: 1px solid #333333; border-radius: 8px; overflow: hidden; box-shadow: 0 10px 30px rgba(0,0,0,0.8); }
    .header { background: #141414; padding: 24px; border-bottom: 2px solid #ffffff; }
    .header h1 { margin: 0; font-size: 20px; color: #ffffff; font-weight: 700; letter-spacing: 0.05em; text-transform: uppercase; }
    .header p { margin: 6px 0 0; font-size: 13px; color: #a0aec0; }
    .content { padding: 24px; }
    .field { margin-bottom: 16px; border-bottom: 1px solid rgba(255,255,255,0.08); padding-bottom: 12px; }
    .field:last-child { border-bottom: none; }
    .label { font-size: 11px; text-transform: uppercase; letter-spacing: 0.08em; color: #888888; margin-bottom: 4px; font-weight: 600; }
    .value { font-size: 15px; color: #ffffff; line-height: 1.5; }
    .msg-box { background: #141414; border: 1px solid rgba(255, 255, 255, 0.15); border-radius: 6px; padding: 16px; margin-top: 8px; white-space: pre-wrap; font-size: 14px; color: #ffffff; line-height: 1.6; }
    .footer { background: #141414; padding: 16px 24px; font-size: 11px; color: #718096; border-top: 1px solid rgba(255,255,255,0.08); }
  </style>
</head>
<body>
  <div class="card">
    <div class="header">
      <h1>Elevance Legal Services</h1>
      <p>New consultation enquiry received from elevancelegal.co.uk</p>
    </div>
    <div class="content">
      <div class="field">
        <div class="label">Client Name</div>
        <div class="value"><strong>{$name}</strong></div>
      </div>
      <div class="field">
        <div class="label">Email Address</div>
        <div class="value"><a href="mailto:{$email}" style="color: #63b3ed; text-decoration: none;">{$email}</a></div>
      </div>
      <div class="field">
        <div class="label">Phone Number</div>
        <div class="value">{$phone}</div>
      </div>
      <div class="field">
        <div class="label">Legal Enquiry / Question</div>
        <div class="msg-box">{$question}</div>
      </div>
    </div>
    <div class="footer">
      Timestamp: {$timestamp} | Source: elevancelegal.co.uk | Client IP: {$ip}
    </div>
  </div>
</body>
</html>
HTML;

// Headers
$headers = [];
$headers[] = 'MIME-Version: 1.0';
$headers[] = 'Content-Type: text/html; charset=UTF-8';
$headers[] = 'From: Elevance Legal Services <info@elevancelegal.co.uk>';
$headers[] = 'Reply-To: ' . $name . ' <' . $email . '>';
$headers[] = 'X-Mailer: PHP/' . phpversion();

// Send email
$mailSent = @mail($to, $subject, $htmlBody, implode("\r\n", $headers));

// Log submission locally
$logDir = __DIR__ . '/logs';
if (!is_dir($logDir)) {
    @mkdir($logDir, 0755, true);
}
$logEntry = [
    'timestamp' => $timestamp,
    'name'      => $name,
    'email'     => $email,
    'phone'     => $phone,
    'question'  => $question,
    'ip'        => $ip,
    'mail_sent' => $mailSent
];
@file_put_contents($logDir . '/enquiries.log', json_encode($logEntry, JSON_UNESCAPED_SLASHES) . PHP_EOL, FILE_APPEND | LOCK_EX);

echo json_encode([
    'success' => true,
    'message' => 'Thank you! Your enquiry has been received and forwarded to our legal advisory team. We will review your papers and reply shortly.'
]);
