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
            res.send('creado');
        });
    })
};

module.exports = controller;