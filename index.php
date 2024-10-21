<?php
require 'vendor/autoload.php'; // Подключите библиотеку Google API Client

use Google\Client;
use Google\Service\Sheets;

// Настройки бота
$bot_id = '6473374979';
$scope = 'phone_number,first_name,last_name';
$public_key = 'ВАШ_PUBLIC_KEY';
$nonce = bin2hex(random_bytes(16));

// URL для авторизации
$auth_url = "https://oauth.telegram.org/auth?bot_id={$bot_id}&scope={$scope}&public_key={$public_key}&nonce={$nonce}";

// Обработка обратного вызова
if (isset($_GET['hash']) && isset($_GET['payload'])) {
    $hash = $_GET['hash'];
    $payload = $_GET['payload'];

    // Верификация хэша здесь...

    // Извлечение данных пользователя
    $user = json_decode(base64_decode($payload), true);
    $firstName = $user['first_name'];
    $lastName = $user['last_name'];
    $phoneNumber = isset($user['phone_number']) ? $user['phone_number'] : 'Не указан';
    $chatId = $user['id'];

    // Подключение к Google Sheets
    $client = new Client();
    $client->setApplicationName('Telegram Auth');
    $client->setScopes([Sheets::SPREADSHEETS]);
    $client->setAuthConfig('credentials.json');
    
    $service = new Sheets($client);
    
    // ID вашей таблицы
    $spreadsheetId = '10meNWqZNAeRmD-K0_2U3f4e3gcqMeywBHFDq3Sg4lXY';
    
    // Данные для добавления
    $values = [[$chatId, $firstName, $lastName, $phoneNumber]];
    
    // Запись данных в таблицу
    $body = new Sheets\ValueRange(['values' => $values]);
    $params = ['valueInputOption' => 'RAW'];
    
    $result = $service->spreadsheets_values->append($spreadsheetId, 'Лист1!A:D', $body, $params);
}
?>

<!DOCTYPE html>
<html lang="ru">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Авторизация через Telegram</title>
</head>
<body>
    <h1>Авторизация через Telegram</h1>
    <a href="<?php echo htmlspecialchars($auth_url); ?>">Войти с помощью Telegram</a>

    <?php if (isset($firstName)): ?>
        <div id="user-info">
            <?php echo "Привет, " . htmlspecialchars($firstName); ?>
        </div>
    <?php endif; ?>
</body>
</html>
