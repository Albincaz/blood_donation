

async function logDonorData() {
    const res = await fetch("http://localhost:3000/getdonors")
    if (res.status == 200) {
        const donors = await res.json()
        console.log(donors);
        str1 = ``
        donors.forEach((donor, index) => {
            str1 += `
        <tr>
        <td ><input type="text" name="name" disabled=true id="name-${donor._id}" value="${donor.name}"></td>
        <td ><input type="text" name="gender" id="gender-${donor._id}" disabled=true value="${donor.gender}"></td>
        <td ><input type="text" name="group" id="group-${donor._id}" disabled=true value="${donor.group}"></td>
        <td ><input type="text" name="address" disabled=true id="address-${donor._id}" value="${donor.address}"></td>
        <td ><input type="text" name="phone" disabled=true id="phone-${donor._id}" value="${donor.phone}"></td>
        <td style="border: none;background-color: none;width: 148px;">
        <button style="background-color: blue;" onclick="handleEdit('${donor._id}')">EDIT</button>
        <button style="background-color: green;" onclick="">SAVE</button>
        <button onclick="handleDelete('${donor._id}')">DELETE</button></td>
                    </tr>
                    `

        });
        document.getElementById("display").innerHTML = str1

    }
}
// Call the function to log data
logDonorData();


function handleEdit(id) {
    document.getElementById(`name-${id}`).disabled=false
    document.getElementById(`gender-${id}`).disabled=false
    document.getElementById(`group-${id}`).disabled=false
    document.getElementById(`address-${id}`).disabled=false
    document.getElementById(`phone-${id}`).disabled=false
}

async function handleDelete(id){
    const res= await fetch("http://localhost:3000/delete",{
        method:"DELETE",
        headers:{"Content-Type":"text/plain"},
        body:id
    })
    console.log(res);
    if(res.status==200){
        alert("Successfully Deleted")
        logDonorData();
        
    }
    else{
        alert("Failed to Delete.Try again...")
    }
}


// async function handleUpdate(_id){
//     const name = document.getElementById(`name-${_id}`).value;
//     const gender = document.getElementById(`gender-${_id}`).value;
//     const group = document.getElementById(`group-${_id}`).value;
//     const address = document.getElementById(`address-${_id}`).value;
//     const phone = document.getElementById(`phone-${_id}`).value;

//     let data = {_id,name,gender,group,address,phone};
//     const res = await fetch(`http://localhost:3000/update`,{
//         method : "PUT",
//         headers : {"Content-Type":"text/json"},
//         body : JSON.stringify(data)
//     })

//     if (res==200){
//         alert("Succesfully Updated")
//         logDonorData()
//     }
//     else{
//         alert("failed to update")
//     }
// }