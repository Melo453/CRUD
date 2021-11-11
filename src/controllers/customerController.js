const controller = {};

controller.list = (req,res) =>{
    req.getConnection((err, conn)=>{
        conn.query('SELECT * FROM customers', (err, rows) =>{
            if(err) {
                res.json(err);
            }
            res.render('customers',{
                data: rows
            });
        });
    });
};

controller.save = (req,res) => {
    const data = req.body;

    req.getConnection((err,conn) =>{
        conn.query('INSERT INTO customers set ?', [data], (err, rows) => {
            console.log(rows);
            res.redirect('/');
        });
    })
};

controller.delete = (req,res) => {
    const {id} = req.params;
    req.getConnection((err,conn) =>{
        conn.query('DELETE FROM customers WHERE id = ?', [id], (err,rows) =>{
            res.redirect('/');
        })
    })
    
};

module.exports = controller;