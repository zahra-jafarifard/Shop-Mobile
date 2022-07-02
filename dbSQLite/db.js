import * as SQLite from 'expo-sqlite';

const db = SQLite.openDatabase('cart.db');

export const initial = () => {
    return new Promise((resolve, reject) => {
        db.transaction((tx) => {
            tx.executeSql('CREATE TABLE IF NOT EXISTS carts( name TEXT NOT NULL , price REAL NOT NULL, image TEXT NOT NULL);',
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