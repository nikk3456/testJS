import React, {useEffect, useState, useMemo} from "react";

function TableUser({ users }){
    const [sortField, setsortField] = useState(null); //поле
    const [sortOption, setSortOption] = useState('none'); //вариант сортировки

    //сама сортировка
    const processSort = (field) =>{
        if (sortField != field){
            setsortField(field);
            setSortOption('asc');
        } else{
            //last=>new
            setSortOption(last => last === 'asc'? 'desc': last === 'desc'? 'none' : 'asc');
        }
    };

    //приманение на пользователей
    const sortUsers = (() =>{
        if (sortOption==='none' || !sortField){
            return users;
        }
        
        return [...users].sort((a,b) =>{
            
            //сборка в фио
            let A,B;
            if(sortField === 'fullName'){
                A = `${a.lastName} ${a.firstName} ${a.maidenName}`.toLowerCase();
                B = `${b.lastName} ${b.firstName} ${b.maidenName}`.toLowerCase();
            } else{
                A=a[setsortField];
                B=b[setsortField];
            }
            
            if(typeof A =='string'){
                return sortOption === 'asc'? A.localeCompare(B):B.localeCompare(A);    
            }
            return sortOption === 'asc'? A-B:B-A;
        });
    }, [users,setsortField,setSortOption]);
    
    
    
    return(
        <div> 
            <table style={{width:'500px', border:'4mm ridge rgba(89, 192, 252, 0.6)', borderCollapse: 'collapse'}}>
                <tr>
                    <th style={{textAlign:'left'}}>ФИО</th>
                    <th style={{textAlign:'left'}}>Возраст</th>
                    <th style={{textAlign:'left'}}>Пол</th>
                    <th style={{textAlign:'left'}}>Телефон</th>
                </tr>
                {users.map(user => (
                    <tr key={user.id}>
                        <td style={{ border: '2px solid #2a729cff'}}>{`${user.lastName} ${user.firstName} ${user.maidenName}`}</td>
                        <td style={{ border: '2px solid #2a729cff'}}>{user.age}</td>
                        <td style={{ border: '2px solid #2a729cff'}}>{user.gender}</td>
                        <td style={{ border: '2px solid #2a729cff'}}>{user.phone}</td>
                    </tr>))}
            </table>
        </div>
    );
}

//для удобного экспорта
export default TableUser;