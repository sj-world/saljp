
// Number option upto 500 
$(function () {
	var $select = $(".1-500");
	for (i = 1; i <= 500; i++) {
		$select.append($('<option></option>').val(i).html(i))
	}
});

// Global variables ..
var contentBox = document.querySelector('.info');


// putting name data to search field
function putNameData() {
	var mylist = document.getElementById("myList");
	document.getElementById("name").value = mylist.options[mylist.selectedIndex].text;
}


// putting number data to search field
function putNumberData() {
	var myNum = document.getElementById("number");
	document.getElementById("num").value = myNum.options[myNum.selectedIndex].text;
}


// show detail about the person
function showDetail() {
	var name = document.getElementById('name');
	var number = document.getElementById('num')
	var cont = document.querySelector('.cont');
	var img = document.querySelector('.img');
	var heading = document.querySelector('.person_info_heading');
	// console.log(img);
	console.log(heading);

	if (name.value === "A" && number.value == "1") {
		contentBox.style.display = "block";
		cont.innerHTML = "some content about person 'A' :- Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius architecto fugiat dolorem nobis, deserunt cumque tenetur sint perspiciatis a facere consectetur sed delectus velit alias eum molestiae. Natus assumenda incidunt voluptatum, eius laborum quo minima iure atque quaerat doloremque ad soluta blanditiis repudiandae sapiente voluptate veritatis eos omnis consectetur esse vitae similique! Officia exercitationem ipsum, temporibus quo incidunt maiores asperiores magnam ab voluptatum inventore totam velit, harum modi officiis, excepturi minima ea omnis? Recusandae tempore eum eius explicabo iure. Exercitationem quasi minus reprehenderit ducimus, adipisci aut recusandae tempora velit quam vel alias eveniet voluptate ad, voluptatum modi corrupti illo? Distinctio."
		// img.src = "img/sam.png";
		heading.innerHTML = "Heading of person 'A'"
	}
	else if (name.value === "B" && number.value == "2") {
		// console.log("fine");
		contentBox.style.display = "block";
		cont.innerHTML = "Now some content about person 'B'. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius architecto fugiat dolorem nobis, deserunt cumque tenetur sint perspiciatis a facere consectetur sed delectus velit alias eum molestiae. Natus assumenda incidunt voluptatum, eius laborum quo minima iure atque quaerat doloremque ad soluta blanditiis repudiandae sapiente voluptate veritatis eos omnis consectetur esse vitae similique! Officia exercitationem ipsum, temporibus quo incidunt maiores asperiores magnam ab voluptatum inventore totam velit, harum modi officiis, excepturi minima ea omnis? Recusandae tempore eum eius explicabo iure. Exercitationem quasi minus reprehenderit ducimus, adipisci aut recusandae tempora velit quam vel alias eveniet voluptate ad, voluptatum modi corrupti illo? Distinctio...! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius architecto fugiat dolorem nobis, deserunt cumque tenetur sint perspiciatis a facere consectetur sed delectus velit alias eum molestiae. Natus assumenda incidunt voluptatum, eius laborum quo minima iure atque quaerat doloremque ad soluta blanditiis repudiandae sapiente voluptate veritatis eos omnis consectetur esse vitae similique! Officia exercitationem ipsum, temporibus quo incidunt maiores asperiores magnam ab voluptatum inventore totam velit, harum modi officiis, excepturi minima ea omnis? Recusandae tempore eum eius explicabo iure. Exercitationem quasi minus reprehenderit ducimus, adipisci aut recusandae tempora velit quam vel alias eveniet voluptate ad, voluptatum modi corrupti illo? Distinctio."
		// img.src = "img/sahil.png";
		heading.innerHTML = "Now heading of person 'B'";

	}



	else if (name.value === "" || number.value === "") {
		alert("Please fill your information to get the details ..!");
	}

	else {
		contentBox.style.display = "block";
		cont.innerHTML = "No data found ..! Please put the correct information."
		// img.src = "";


		setTimeout(() => {
			hideDetail();
		}, 4000);

	}
}



// hide detail of the person
function hideDetail() {
	contentBox.style.display = "none";
}
