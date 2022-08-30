const mysql = require('mysql');
const connection = mysql.createConnection({
  host: 'us-cdbr-east-05.cleardb.net',
  user: 'bdc2cb91595c98',
  password: 'df8b86d2',
  port: '3306',
  database: 'heroku_f0a6e96aa7ef8d3',
  dateStrings: 'date'
});


//리스트 전체 불러오기
function getAllMemos(callback) {
  connection.query('select * from notice ORDER BY id DESC', (err, rows, fields) => {
    if (err) throw err;
    callback(rows);
  })
}

//리스트 전체 부르기(공지사항)
function getAllNotice(callback) {
  connection.query('SELECT * FROM (SELECT *, @rownum:=@rownum+1 AS RNUM FROM notice, (SELECT @rownum :=0 as R)NUM)SUB ORDER BY id DESC;', (err, rows, fields) => {
    if (err) throw err;
    callback(rows);
  });
}

// 새로운 내용추가(공지사항)
function insertNotice(writer, pass, title, content, callback) {
  connection.query(`INSERT INTO notice (writer, pass, title, content, created) VALUES ('${writer}', '${pass}' , '${title}', '${content}', NOW())`, (err, result) => {
    if (err) throw err;
    callback();
  });
}

// id값과 일치하는 row만 불러오기(공지사항)
function getNoticeById(id, callback) {
  connection.query(`SELECT * FROM notice WHERE id = '${id}'`, (err, row, fields) => {
    if (err) throw err;
    callback(row);
  });
}

// id 값과 일치하는 부분 수정 함수(공지사항)
function updateNoticeById(id, writer, pass, title, content, callback) {
  connection.query(`UPDATE notice set id = '${id}', writer = '${writer}', pass = '${pass}', title = '${title}', content = '${content}' WHERE id = '${id}'`, (err, result) => {
    if (err) throw err;
    callback();
  });
}

// id 값과 일치하는 부분 삭제(공지사항)
function deleteNoticeById(id, callback) {
  connection.query(`DELETE FROM notice WHERE id = '${id}'`, (err, result) => {
    if (err) throw err;
    callback();
  });
}







//리스트 전체 부르기(여행문의)
function getAllQna(callback) {
  connection.query('SELECT * FROM (SELECT *, @rownum:=@rownum+1 AS RNUM FROM qna, (SELECT @rownum :=0 as R)NUM)SUB ORDER BY id DESC;', (err, rows, fields) => {
    if (err) throw err;
    callback(rows);
  });
}

// 새로운 내용추가(여행문의)
function insertQna(writer, pass, title, content, callback) {
  connection.query(`INSERT INTO qna (writer, pass, title, content, created) VALUES ('${writer}', '${pass}', '${title}', '${content}', NOW())`, (err, result) => {
    if (err) throw err;
    callback();
  });
}


// id값과 일치하는 row만 불러오기(여행문의)
function getQnaById(id, callback) {
  connection.query(`select * from qna WHERE id = '${id}'`, (err, row, fields) => {
    if (err) throw err;
    callback(row);
  });
}

// id 값과 일치하는 부분 수정 함수 (여행문의)
function updateQnaById(id, writer, pass, title, content, callback) {
  connection.query(`UPDATE qna SET id = '${id}', writer = '${writer}', pass = '${pass}', title = '${title}', content = '${content}' WHERE id = ${id}`, (err, result) => {
    if (err) throw err;
    callback()
  });
}

// id값과 일치하는 부분 삭제 (여행문의)
function deleteQnaById(id, callback) {
  connection.query(`DELETE FROM qna WHERE id = '${id}'`, (err, result) => {
    if (err) throw err;
    callback();
  });
}






//리스트 전체 부르기(여행후기)
function getAllReview(callback) {
  connection.query('SELECT * FROM (SELECT *, @rownum:=@rownum+1 AS RNUM FROM review, (SELECT @rownum :=0 as R)NUM)SUB ORDER BY id DESC;', (err, rows, fields) => {
    if (err) throw err;
    callback(rows);
  });
}

// 새로운 내용추가(여행후기)
function insertReview(writer, pass, title, content, callback) {
  connection.query(`INSERT INTO review (writer, pass, title, content, created) VALUES ('${writer}', '${pass}', '${title}','${content}', NOW())`, (err, result) => {
    if (err) throw err;
    callback();
  });
}

// id값과 일치하는 row만 불러오기(여행후기)
function getReivewById(id, callback) {
  connection.query(`select * from review WHERE id = '${id}'`, (err, row, fields) => {
    if (err) throw err;
    callback(row);
  });
}

// id 값과 일치하는 부분 수정 함수 (여행후기)
function updateReviewById(id, writer, pass, title, content, callback) {
  connection.query(`UPDATE review set id = '${id}', writer = '${writer}', pass = '${pass}', title = '${title}', content = '${content}' WHERE id = ${id}`, (err, result) => {
    if (err) throw err;
    callback()
  });
}

// id값과 일치하는 부분 삭제 (여행후기)
function deleteReviewById(id, callback) {
  connection.query(`DELETE FROM review WHERE id = '${id}'`, (err, result) => {
    if (err) throw err;
    callback();
  });
}









module.exports = {
  getAllMemos,
  getAllNotice,
  insertNotice,
  getNoticeById,
  updateNoticeById,
  deleteNoticeById,
  getAllQna,
  insertQna,
  getQnaById,
  updateQnaById,
  deleteQnaById,
  getAllReview,
  insertReview,
  getReivewById,
  updateReviewById,
  deleteReviewById
};