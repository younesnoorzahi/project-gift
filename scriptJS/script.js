    function sendOrder(event) {
        event.preventDefault();

        
        const giftCard = document.getElementById('giftCardSelect').value;
        const phone = document.getElementById('phone').value;
        const accountId = document.getElementById('accountId').value;
        const gameName = document.getElementById('gameName').value;

        
        const message = `سفارش جدید:\nگیفت کارت: ${giftCard}\nشماره تماس: ${phone}\nآیدی اکانت: ${accountId}\nنام بازی: ${gameName}`;

        
        const token = '7654207553:AAHz2_Uy4fEUp6Y1-OEn30HMblPUuXWVZt0';
        const chatId = '7702824097';

        fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                chat_id: chatId,
                text: message,
                parse_mode: 'Markdown'
            })
        })
        .then(response => {
            if (response.ok) {
                alert('سفارش شما با موفقیت ارسال شد!');
                document.getElementById('giftCardForm').reset();
            } else {
                alert('خطا در ارسال سفارش. لطفاً دوباره تلاش کنید.');
            }
        })
        .catch(error => {
            console.error('Error:', error);
            alert('خطا در ارسال سفارش. لطفاً دوباره تلاش کنید.');
        });
    }