import React from 'react';
// import foodsData from '../../foodsData';

const Inventory = () => {
    // const addInventory = () => {
    // console.log('before post', foodsData.length);

    // fetch('https://red-onion-food.herokuapp.com/addFood', {
    //     method: 'POST',
    //     headers: {
    //         'Content-Type': 'application/json'
    //     },
    //     body: JSON.stringify(foodsData)
    // }).then(res => res.json()).then(data => {
    //     console.log('Successfully post', data);
    // });
    // }

    // Post data to the server
    const btnAddFood = () => {
        const cat = document.getElementById('cat').value;
        const key = document.getElementById('key').value;
        const title = document.getElementById('title').value;
        const price = document.getElementById('price').value;
        const shortDisc = document.getElementById('shortDisc').value;
        const longDisc = document.getElementById('longDisc').value;
        const img = document.getElementById('img').value;
        const food = { cat, key, title, price, shortDisc, longDisc, img }

        // post
        fetch('https://red-onion-food.herokuapp.com/addFood', {
            method: 'POST',
            body: JSON.stringify(food),
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            }
        }).then(res => res.json()).then(data => {
            // Clean input
            document.getElementById('cat').value = '';
            document.getElementById('key').value = '';
            document.getElementById('title').value = '';
            document.getElementById('price').value = '';
            document.getElementById('shortDisc').value = '';
            document.getElementById('longDisc').value = '';
            document.getElementById('img').value = '';

            // Success Message
            const successMsg = document.getElementById('successMsg');
            successMsg.style.display = 'block';
            setTimeout(() => {
                successMsg.style.display = 'none';
            }, 3000);
        });
    }

    return (
        <div style={{ textAlign: "center", padding: "50px 0" }}>
            <div className="inventoryForm" style={{ maxWidth: "1140px", margin: "0 auto" }}>
                <select name="cat" id="cat">
                    <option value="breakfast">Breakfast</option>
                    <option value="lunch">Lunch</option>
                    <option value="dinner">Dinner</option>
                </select><br />
                <input type="text" class="input" id="key" placeholder="Food key" /><br />
                <input type="text" class="input" id="title" placeholder="Food title" /><br />
                <input type="number" class="input" id="price" placeholder="Food price" /><br />
                <input type="text" class="input" id="shortDisc" placeholder="Food short description" /><br />
                <input type="text" class="input" id="longDisc" placeholder="Food long description" /><br />
                <input type="text" class="input" id="img" placeholder="Food img url" /><br /><br />
                <button class="btn btnFull" id="addFood" onClick={btnAddFood}>Add Food</button>
            </div>

            <p id="successMsg" style={{ color: "green", display: "none", marginTop: "10px" }}>Food added successfully</p>
        </div >
    );
};

export default Inventory;