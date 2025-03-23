type UsersData = {
    id: number,
    CourseName: string,
    Price: string,
    Hours: number,
    email: string,

}

function UserFun(props: UsersData) {
    return (

        <div className="flex flex-col flex-wrap items-center mt-4  font-mono">
            <h1 className="text-2xl font-extrabold" >{props.CourseName}</h1>
            <h5 className="text-lg font-bold text-gray-900 dark:text-white">{props.Price}</h5>

            <p className="text-xl flex text-black-700 dark:text-gray-400 gap-3">Hours: {props.Hours}</p>

            <p className="text-sm text-gray-500 dark:text-white">Email: {props.email}</p>

        </div>

    )
}

export default UserFun