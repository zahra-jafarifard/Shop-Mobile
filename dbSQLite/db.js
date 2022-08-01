import * as SQLite from 'expo-sqlite';
const db = SQLite.openDatabase('shop.db');

export const init = () => {
    return new Promise((resolve, reject) => {
        db.transaction((tx) => {
            tx.executeSql('CREATE TABLE IF NOT EXISTS cart(id TEXT NOT NULL ,name TEXT NOT NULL , image TEXT NOT NULL , price REAL NOT NULL);',
                [],
                () => {
                    resolve();
                },
                (_, err) => {
                    reject(err);
                }
            );
            tx.executeSql('CREATE TABLE IF NOT EXISTS client(id TEXT NOT NULL , mobile TEXT  NOT NULL , token TEXT );',
                [],
                () => {
                    resolve();
                },
                (_, err) => {
                    reject(err);
                }
            );
        });

        // db.transaction((tx) => {
           
        // });
    })

}

export const addToCartSQLite = (id, name, image, price) => {

    return new Promise((resolve, reject) => {
        db.transaction((tx) => {
            tx.executeSql('INSERT INTO cart(id , name, image , price) VALUES(?, ? ,? , ?)',
                [id, name, image, price],
                (_, result) => {
                    resolve(result);
                },
                (_, err) => {
                    reject(err);
                }
            );
        });
    })
};

export const addToClientSQLite = (id, mobile, token) => {
    return new Promise((resolve, reject) => {
        db.transaction((tx) => {
            tx.executeSql('INSERT INTO client(id, mobile , token) VALUES(?, ? ,?)',
                [id, mobile, token],
                (_, result) => {
                    //console.log('rrrr', result);
                    resolve(result);
                    fetchClientSQLite();
                },
                (_, err) => {
                    reject(err);
                }
            );
        });
    })
};

export const fetchClientSQLite = () => {
    return new Promise((resolve, reject) => {
        db.transaction((tx) => {
            tx.executeSql("SELECT * FROM client ",
                [],
                (_, result) => {
                    const foundClient = result.rows._array
                    // console.log('foundClient', foundClient)
                     resolve(result);

                },
                (_, err) => {
                    reject(err);
                }
            );
        });
    })

}
export const deleteClientSQLite = () => {
    return new Promise((resolve, reject) => {
        db.transaction((tx) => {
            tx.executeSql("delete from client;",
                [],
                (_, result) => {
                    resolve(result);
                    fetchClientSQLite();
                    console.log('Table Dropped...')
                },
                (_, err) => {
                    reject(err);
                }
            );
        });
    })

}


export const selectAllCartSQLite = () => {
    return new Promise((resolve, reject) => {
        db.transaction((tx) => {
            tx.executeSql('SELECT * FROM cart',
                [],
                (_, result) => {
                    resolve(result);
                },
                (_, err) => {
                    reject(err);
                }
            );
        });
    })

}