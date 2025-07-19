function TableUser({ users }){
    return(
        <div> 
            <table>
                <tr>
                    <th>ФИО</th>
                    <th>Возраст</th>
                    <th>Пол</th>
                    <th>Телефон</th>
                </tr>
                {users.map(user => (
                    <tr key={user.id}>
                        <td>{`${user.lastName} ${user.firstName} ${user.maidenName}`}</td>
                        <td>{user.maidenName}</td>
                        <td>{user.age}</td>
                        <td>{user.gender}</td>
                        <td>{user.phone}</td>
                    </tr>))}
            </table>
        </div>
    );
}

//для удобного экспорта
export default TableUser;