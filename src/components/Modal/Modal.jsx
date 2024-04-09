import { useState, useEffect } from "react";

export default function Modal() {
    // useEffect(() => {
    //     // Зберігаємо ідентифікатор інтервалу в змінну
    //     const intervalId = setInterval(() => {
    //         console.log(`Interval - ${Date.now()}`);
    //     }, 2000);
    //     return () => {
    //         // Очищаємо інтервал за його ідентифікатором
    //         clearInterval(intervalId);
    //     };
    // }, []);
    // return <div>Modal</div>;

    useEffect(() => {
        setInterval(() => {
            console.log(`Interval - ${Date.now()}`);
        }, 2000);
    }, []);

    return <div>Modal</div>;
}
