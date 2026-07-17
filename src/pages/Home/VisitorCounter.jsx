import { useEffect, useState } from "react";


function VisitorCounter() {

    const [count, setCount] = useState(100);


    useEffect(() => {

        const countKey = "portfolioVisitorCount";
        const userKey = "portfolioUserVisited";


        let visitors = localStorage.getItem(countKey);


        // First time initialize
        if (!visitors) {

            visitors = 100;

            localStorage.setItem(
                countKey,
                visitors
            );

        }


        // New visitor increase by 1
        if (!localStorage.getItem(userKey)) {


            visitors = Number(visitors) + 1;


            localStorage.setItem(
                countKey,
                visitors
            );


            localStorage.setItem(
                userKey,
                "visited"
            );

        }


        setCount(visitors);


    }, []);



    return (

        <div className="visitor-counter">

            👀 Visitors:
            <strong>{count}</strong>

        </div>

    );

}


export default VisitorCounter;