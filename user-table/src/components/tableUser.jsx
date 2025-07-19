function TableUser({ users }){
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