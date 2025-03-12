function sendTicket(event) {
    event.preventDefault();

    
    const name = document.getElementById('ticketName').value;
    const email = document.getElementById('ticketEmail').value;
    const subject = document.getElementById('subject').value;
    const message = document.getElementById('ticketMessage').value;

    
    const ticketMessage = `
        **تیکت جدید**
        *نام:* ${name}
        *ایمیل:* ${email}
        *موضوع:* ${subject}
        *پیام:* ${message}
    `;

    
    const telegramBotToken = '7361815307:AAGCmIQAH2VQaWIka3ZD_h_Fe2g2otRvAiM';
    const chatId = '7702824097';

    
    fetch(`https://api.telegram.org/bot${telegramBotToken}/sendMessage`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            chat_id: chatId,
            text: ticketMessage,
            parse_mode: 'Markdown'
        })
    })
    .then(response => {
        if (response.ok) {
            alert('تیکت شما با موفقیت ارسال شد!');
            document.getElementById('ticketForm').reset();
        } else {
            alert('خطا در ارسال تیکت. لطفاً دوباره تلاش کنید.');
        }
    })
    .catch(error => {
        console.error('Error:', error);
        alert('خطا در ارسال تیکت. لطفاً دوباره تلاش کنید.');
    });
}