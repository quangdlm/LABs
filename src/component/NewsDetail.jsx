export default function NewsDetail(props){
    const news = props.news;
    return(
        <div className="container"
        style={{
            display:'flex',
            flexDirection:'column',
            justifyContent:'center',
            alignItems:'center',
            gap:'10px',
            textAlign:'justify'
        }}>
            <h1><strong>{news.title}</strong></h1>
            <p><i>{news?.intro}</i></p>
            <img 
            style={{
                width:'40vw'
            }}
            src={news?.image} alt="news image" />
            <p>{news?.content}</p>
        </div>
    )
}