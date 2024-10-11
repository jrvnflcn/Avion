function sendText() {

    const students = [
        ['Jose', 'Rizal'],
        ['Manny', 'Pacquiao'],
        ['Robert', 'Rodriguez'],
        ['Elon', 'Musk'],
        ['Mark', 'Zuckerberg']
    ];

    for (let i = 0; i < students.length; i++) {
        const firstName = students[i][0];
        const lastName = students[i][1];
        const message = `Greetings ${firstName} ${lastName}! School is canceled for the day! Please check your e-mail for your asynchronized homework!`;
        
        console.log(message);
        console.log(`*********`);
    }
}
    

sendText();

