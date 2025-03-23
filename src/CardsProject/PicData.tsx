

export const FrontendImgs = [

    {

        src: 'https://cyberhoot.com/wp-content/uploads/2020/07/Free-Courses-to-learn-JavaScript-1024x576.jpg'

    },

    {
        src: 'https://miro.medium.com/v2/resize:fit:700/1*dLaDL-lSN0iprzmOpmM7zQ.png'
    },

    {

        src: 'https://www.w3schools.com/w3images/fjords.jpg'

    },

]

export const TheBackEndImgs = [
    { src: 'https://media.licdn.com/dms/image/v2/D4D12AQF1btzrvx64aQ/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1698242399109?e=2147483647&v=beta&t=_V-6ub-4NLvaWr2Nmoj4IhUoIP4QyrUTx-GBQXWXQQs' },

    { src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7d/Microsoft_.NET_logo.svg/800px-Microsoft_.NET_logo.svg.png' },
]

export const FullStackImgs = [
    { src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4tZWVFCDi-UBtRvugXE-AcaDj-dx6QPRChw&s' }
    ,
    { src: 'https://cdn.prod.website-files.com/64a6f67b79a80fd9ff31ca7a/651861925d86eb8b1c8d90b0_651189e081964b9002b1e6d1_64c2586cc3eccac8b6a2e3a9_tb.png' }
]



type PicPick = {
    src: string,
    className: string
}

function F2(props: PicPick) {
    return (
        <>
            <img className={props.className} src={props.src} alt="" />
        </>
    )
}

export default F2


