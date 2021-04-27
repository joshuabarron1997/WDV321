// JavaScript Document
/*jshint esversion: 6 */
//js objects
let jsJavaBook = {
	isbn: "0-596-00016-2",
	title: "Java and XML",
	price: 39.95,
	publisher: "O'Reilly &amp; Associates",
	authorFirst: ["Brett"],
	authorLast: ["McLaughlin"],
	authorPrice: [22.00],
	copyright: 2000,
	comments: "Update required"
};
let jsVBBook = {
	isbn: "1-861003-32-3",
	title: "Professional Visual Basic 6 XML",
	price: 49.99,
	publisher: "Wrox Press",
	authorFirst: ["James", "Tuen"],
	authorLast: ["Britt", "Duynstee"],
	authorPrice: [22.00, 0],
	copyright: 2000,
	comments: "Outdated text. Switch to C#"
};
let jsTextbooks = [jsJavaBook, jsVBBook];

//json objects
let JavaBook, VB6Book = "";
JavaBook = {
	"isbn": "0-596-00016-2",
	"title": "Java and XML",
	"price": 39.95,
	"publisher": "O'Reilly &amp; Associates",
	"authorFirst": ["Brett"],
	"authorLast": ["McLaughlin"],
	"authorPrice": [22.00],
	"copyright": 2000,
	"comments": "Update required"
};
VB6Book = {
	"isbn": "1-861003-32-3",
	"title": "Professional Visual Basic 6 XML",
	"price": 49.99,
	"publisher": "Wrox Press",
	"authorFirst": ["James", "Tuen"],
	"authorLast": ["Britt", "Duynstee"],
	"authorPrice": [22.00, 0],
	"copyright": 2000,
	"comments": "Outdated text. Switch to C#"
};
let textbooks = [JavaBook, VB6Book];

