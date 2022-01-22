import { useState, useEffect } from "react";


export const useGuessAge = ( name ) => {

    const [age , setAge] = useState(null);

    useEffect(() => {

        const url = `https://api.agify.io/?name=${name}`;

        const getAge = async () => {
            const data = await fetch(url).then(res => res.json());
            console.log(data)
            setAge(prev => data.age);
        } ;

        getAge();
    }, [ name ]);

    return age;

};

