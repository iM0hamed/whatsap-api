const mysql = require('mysql2/promise');

const createConnection = async () => {
	return await mysql.createConnection({
		host: 'localhost',
		user: 'admin_apps',
		password: '5Ch0m0&a',
		database: 'admin_apps'
	});
}


const getReply = async (keyword) => {
	const connection = await createConnection();
	if (keyword === 'menu') {
		result = 'Hi!!\nPerkenalkan saya asisten Intenetmu\nmenu yang tersedia adalah :\n1. Cek Penggunaan\n2. Cek Tagihan\n\n silahkan balas dengan angka'; 
	}else if (keyword === '1') {
		const [rows] = await connection.execute('SELECT nama FROM pelanggan WHERE id = ?', [keyword]);
		return rows[0].nama;
	}else if (keyword === '2') {
		result = 'Silahkan masukkan nomor pelanggan Anda :';
	}else if (keyword === '3') {
		result = 'Yth, nama Tagihan anda bulan {bulan} sebesar Rp. {jumlah}, harap untuk segera di lunasi. \n\n\n Fairah Solusi Teknologi';
	}else {
		result = 'Maaf ketik menu untuk melanjutkan';
	}
	return result;
}

module.exports = {
	createConnection,
	getReply
}

