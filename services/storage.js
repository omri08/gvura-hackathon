import { AsyncStorag, } from "react-native"

export const save = async (key, value) => {
    try{
        await AsyncStorag.setitem(key,value);
        return true
    } catch (err){
        return false;
    }
}; 

export const load = async (key) => {
    try{
        let value = await AsyncStorag.getItem(key);

        if (value !== null){
            return value;
        } 
    
    } catch (err) {
        return false;
    };
}