const TelegramBot = require('node-telegram-bot-api');
const midtransClient = require('midtrans-client');
const path = require('path');
const setupDashboard = require('./dashboard');  
const botHandler = require('./bot'); 
const setupPromosiNotifikasi = require('./notifce');

const token = '8157298534:AAFQvHWosQPal3S3-kmL0OBBMcB_AHOdE4Q';
const bot = new TelegramBot(token, { polling: true });

const adminChatId = 6622965572; 
let stokProduk = {
    ai_chatgpt: 38,
    ai_claude: 45,
    ai_perplexity: 38,
    ai_you: 45,
    alight_motion: 50
};

setupDashboard(bot, adminChatId, stokProduk);

botHandler(bot, stokProduk);  
setupPromosiNotifikasi(bot, adminChatId);


