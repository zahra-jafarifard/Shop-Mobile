import * as SQLite from 'expo-sqlite';

const db = SQLite.openDatabase('cart.db');

export const init = () => {
    return new Promise((resolve, reject) => {
        db.transaction((tx) => {
            tx.executeSql('CREATE TABLE IF NOT EXISTS carts(id TEXT NOT NULL ,name TEXT NOT NULL , image TEXT NOT NULL , price REAL NOT NULL);',
                [],
                () => {
                    resolve();
                },
                (_, err) => {
                    reject(err);
                }
            );
        });
    })

}

export const addToSQLite = (id, name, image, price) => {

    return new Promise((resolve, reject) => {
        db.transaction((tx) => {
            tx.executeSql('INSERT INTO carts(id , name, image , price) VALUES(?, ? ,? , ?)',
                [id, name, image, price],
                (_, result) => {
                    // console.log('sqlite', result)
                    resolve(result);
                },
                (_, err) => {
                    reject(err);
                }
            );
        });
    })

}
export const selectALLSQLite = () => {

    return new Promise((resolve, reject) => {
        db.transaction((tx) => {
            tx.executeSql('SELECT * FROM carts',
                [],
                (_, result) => {
                    // console.log('SELECT ::', result.rows._array)
                    resolve(result);
                },
                (_, err) => {
                    reject(err);
                }
            );
        });
    })

}