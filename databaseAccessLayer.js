const database = include('/databaseConnection');


async function getAllUsers() {
	let sqlQuery = `
		SELECT web_user_id, first_name, last_name, email FROM Web_User
	`;
	
	try {
		const results = await database.query(sqlQuery);
		console.log(results[0]);
		return results[0];
	}
	catch (err) {
		console.log("Error selecting from user table");
		console.log(err);
		return null;
	}
}


module.exports = {getAllUsers}
