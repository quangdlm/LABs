import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { ThemeContext } from './ThemeProvider';
import NewsDetail from './NewsDetail';

function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function BasicTabs() {
  const [value, setValue] = React.useState(0);
  const {dark} = React.useContext(ThemeContext);


  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%',
        background:`${dark?'#d7d7d7':''}`,
        color:`${dark?'':'black'}`
     }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs 
        centered
        value={value} onChange={handleChange} aria-label="basic tabs example">
          <Tab label="Showbiz Việt" {...a11yProps(0)} />
          <Tab label="Showbiz Anh/Mỹ" {...a11yProps(1)} />
          <Tab label="Showbiz Trung" {...a11yProps(2)} />
          <Tab label="Showbiz Nhật" {...a11yProps(3)} />
        </Tabs>
      </Box>
      <CustomTabPanel value={value} index={0}>
      <NewsDetail news={{
            title:`Ngô Thanh Vân 'không rời nửa bước' khi chồng nhập viện sau tai nạn môtô`,
            intro:`"TP HCM - Huy Trần - chồng Ngô Thanh Vân - nói biết ơn vợ vì cô 'không rời nửa bước', chăm sóc anh sau ca phẫu thuật hậu tai nạn môtô.`,
            image:'https://i1-ngoisao.vnecdn.net/2023/10/18/385777028-861605645329435-5287-5309-5475-1697627195.jpg?w=680&h=0&q=100&dpr=1&fit=crop&s=s7ewPxZVPZbyJWs5HZ2IoA',
            content:`Chiều 18/10, Huy Trần cho biết một tháng trước anh thực hiện động tác khó khi lái môtô và gặp tai nạn. Dù mặc đồ bảo hộ, anh vẫn bị thương. Sau khi chụp cộng hưởng từ MRI, bác sĩ kết luận Huy Trần bị đứt dây chằng chéo trước, dây chằng trong và dập sụn. Anh được chỉ định tập luyện nhẹ trong một tháng để vết thương lành, thời gian phục hồi ngắn lại trước khi phẫu thuật.
            Vài ngày trước, Huy Trần phẫu thuật ở một bệnh viện quốc tế với chi phí 120 triệu đồng. Sau ca mổ dài 90 phút, anh nằm viện 5 ngày. Diễn viên nói anh biết ơn Ngô Thanh Vân vì cô luôn kề cạnh động viên, chăm sóc chồng chu đáo. "Tôi nằm viện 5 ngày thì vợ không rời một giây, hết bóp chân rồi mua cà phê cho tôi mỗi sáng. Cô ấy luôn tìm cách pha trò để tôi giải tỏa căng thẳng. Tôi may mắn khi có người vợ tâm lý, hoàn hảo như vậy", anh nói.
            Huy Trần tiết lộ sau một ngày phẫu thuật, anh đã đi lại được. Tuy nhiên, chấn thương khiến việc di chuyển của anh gặp khó khăn, 5-10 phút phải chườm đá một lần để giảm đau. 6 tháng tới, Huy Trần được bác sĩ khuyến cáo không vận động mạnh hay lái môtô. Những ngày qua, anh thuê người tới nhà thực hiện vật lý trị liệu để nhanh trở về với nhịp sinh hoạt cũ. Vợ thay anh vào bếp nấu nướng, quán xuyến nhà cửa.
            Ngô Thanh Vân và Huy Trần kết hôn hồi tháng 5/2022 sau hai năm hẹn hò. "Đả nữ" từng nói trong mắt mình, chồng không phải hoàng tử, cũng không phải siêu nhân. Anh là điểm tựa, khiến cô cảm thấy bình an, luôn thấy mình nhỏ bé và không bao giờ cô đơn. Diễn viên tiết lộ cô và chồng không chia "kèo trên - kèo dưới" vì cả hai đặt tình yêu lên cao nhất. Đôi uyên ương giữ được sự cân bằng hôn nhân nhờ tư duy mở, sống tích cực và có trách nhiệm với nhau. Về phía Huy Trần, anh nói không biết trước đây Ngô Thanh Vân khó tính thế nào nhưng ở nhà với nhau, anh thấy cô rất dễ thương. Anh và vợ sống dựa trên sự tôn trọng lẫn nhau, luôn nói cho nhau nghe mọi vấn đề lớn để cùng cân nhắc, đưa ra quyết định cuối cùng.
            Huy Trần sinh năm 1990, là Việt kiều, từng sống ở nước ngoài nhiều năm. Anh được biết đến nhiều khi xuất hiện tại chương trình Người ấy là ai, được Hoa hậu chuyển giới Hương Giang "để mắt". Sau đó, Huy Trần được nhiều nhãn hàng mời làm mẫu ảnh.
            Ngô Thanh Vân sinh năm 1979, từng là ca sĩ trước khi hoạt động trong ngành phim ảnh. Cô mang biệt danh "đả nữ" sau thành công của phim Dòng máu anh hùng (2007), đóng cùng Johnny Trí Nguyễn. Trong thập niên 2010, cô chuyển hướng sản xuất phim và có nhiều tác phẩm gây chú ý như Tấm Cám: Chuyện chưa kể và Cô Ba Sài Gòn. Năm 2019, phim Hai Phượng do Ngô Thanh Vân sản xuất và đóng chính thu hơn 200 tỷ đồng, từng là tác phẩm Việt ăn khách nhất mọi thời. Cô từng xuất hiện trong các phim Hollywood như Crouching Tiger, Hidden Dragon: Sword of Destiny, Bright, Star Wars: The Last Jedi, Da 5 Bloods... với nghệ danh Veronica.
            `
        }}/>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
      <NewsDetail news={{
            title:`Angelina Jolie sắp có thêm 2 đứa con?`,
            intro:`"(TNO) Angelina Jolie và Brad Pitt đang có kế hoạch "kết nạp" thêm hai đứa trẻ vào gia đình “quốc tế” của mình.`,
            image:'https://images2.thanhnien.vn/Uploaded/2014/Pictures20136/Thang6/AngelinaJolie2.jpg',
            content:`(TNO) Angelina Jolie và Brad Pitt đang có kế hoạch "kết nạp" thêm hai đứa trẻ vào gia đình “quốc tế” của mình, The Sun dẫn theo một nguồn tin ngày 25.6 (giờ địa phương).
            Theo nguồn tin này, Angelina đã gặp một bé gái người Jordan trong chuyến thăm Syria vừa qua của mình và dự định sẽ nhận nuôi bé. Cô cũng có kế hoạch sinh thêm một đứa con với Brad Pitt.
            Nếu vậy, cặp đôi Jolie và Pitt sẽ có tất cả 8 người con và sẽ trở thành gia đình đông đúc nhất trong số các ngôi sao giải trí Hollywood.
            Hiện tại, họ đang nuôi nấng 6 người con, 3 trong số đó là con nuôi: Maddox (Campuchia), Pax Thien (Việt Nam) và Zahara (Ethiopia). Jolie cũng có với Brad Pitt 3 con: Shiloh (6 tuổi) và cặp song sinh trai gái Knox - Vivienne (4 tuổi).
            Tất cả 6 đứa trẻ kể trên đều được mang họ Jolie-Pitt.
            Nguồn tin của The Sun nói: "Cô ấy bị xúc động đặc biệt vì tình cảnh khi đến thăm Syria và muốn nhận một đứa trẻ tị nạn từ Jordan để giúp đỡ".
            “Cặp song sinh cũng đã lên 4 rồi, và họ thấy đây là lúc thích hợp để có thêm con. Với họ, con cái thì có càng nhiều càng tốt”, nguồn tin này nói thêm.
            Angelina đã quyết định cắt bỏ bộ ngực của mình để ngăn ngừa nguy cơ ung thư vú cách đây vài tháng. Cô trở thành một biểu tượng anh hùng sau khi chia sẻ thông tin này hồi tháng 5.
            Cặp đôi hoàn hảo Jolie-Pitt đang hạnh phúc bên nhau và chuẩn bị cho một đám cưới, dự định diễn ra tại Pháp vào cuối mùa hè này.
            `
        }}/>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={2}>
      <NewsDetail news={{
            title:`Huỳnh Hiểu Minh ẩn ý trách Angela Baby: Bỏ bê quý tử, để mẹ chồng gãy xương vẫn phải chăm sóc cháu trai?`,
            intro:`"Huỳnh Hiểu Minh cho biết cuộc sống làm bố đơn thân với anh không hề dễ dàng.
            Rộ tin Huỳnh Hiểu Minh ngoại tình trước khi ly hôn với Angelababy, còn có con riêng? 
            Angelababy đưa con trai tới trường trong ngày khai giảng, gây sốt với chi tiết liên quan tới Huỳnh Hiểu Minh 
            Sau gần 2 năm ly hôn Huỳnh Hiểu Minh, Angelababy đăng bài ẩn ý bị "cắm sừng" trong ngày Thất tịch 
            `,
            image:'https://kenh14cdn.com/thumb_w/620/203336854389633024/2023/9/23/photo-3-1695438546812967460997.jpg',
            content:`Nam diễn viên Tân Bến Thượng Hải khiến không ít các nghệ sĩ bất ngờ khi cho biết Bọt Biển Nhỏ - con trai anh và vợ cũ Angela Baby không may bị viêm phổi. Dù đã đưa con đến bệnh viện điều trị ngay khi phát hiện nhưng tài tử Trung Quốc vẫn không thể chăm sóc cho quý tử một cách kỹ lưỡng.
            Anh thừa nhận bản thân mệt mỏi cả về thể chất lẫn tinh thần trong khoảng thời gian này. Huỳnh Hiểu Minh kể rằng tâm trạng anh rối bởi khi trong thời gian ghi hình chương trình ở nước ngoài, mẹ ruột nam nghệ sĩ đã gặp tai nạn té ngã gãy xương khi đang chăm sóc cháu nội viêm phổi. Anh bày tỏ nỗi lo lắng khi mẹ bị thương nhưng vẫn phải chăm cháu vì không ai giúp đỡ. Vì để tiện có những người thân khác giúp đỡ chăm sóc Bọt Biển Nhỏ, bà đã phải đưa cháu nội về quê cùng.
            Mặc dù có được sự quan tâm, hỗ trợ của gia đình nhưng Huỳnh Hiểu Minh nhận thấy rằng không ai có thể thay thế được vị trí của bố mẹ trong lòng con cái. Anh cảm nhận sâu sắc sự cô đơn, bất lực sau khi ly hôn, đồng thời nhận ra trách nhiệm lớn lao trong việc nuôi dạy con.
            Những chia sẻ của Huỳnh Hiểu Minh trong chương trình đã thu hút sự chú ý và bàn tán sôi nổi của nhiều cư dân mạng. Nhiều người đặt câu hỏi, tranh cãi: "Angela Baby khi đó đang ở đâu?", "Vì sao Huỳnh Hiểu Minh và Angela Baby không thuê giúp việc để hỗ trợ mẹ nam nghệ sĩ chăm sóc cháu?". Một bộ phận netizen cho rằng sau câu chuyện chia sẻ trên sóng truyền hình, nam nghệ sĩ đang ẩn ý trách khéo vợ cũ.
            Bên cạnh những bình luận chỉ trích Angela Baby, không ít netizen lên tiếng bênh vực nữ diễn viên. Một số tài khoản cho rằng mỹ nhân Trung Quốc không giống như chồng cũ, chưa bao giờ công khai phàn nàn về việc chăm sóc con cái sau ly hôn.
            Hơn nữa, thời gian qua, Huỳnh Hiểu Minh mới là người liên tục vướng tin đồn hẹn hò. Sau nữ doanh nhân, người mẫu Diệp Kha, nam tài tử bị nghi đang yêu nữ diễn viên Triệu Sĩ Cẩn. Tuy nhiên, kể từ sau khi ly hôn Angela Baby đến nay, Huỳnh Hiểu Minh vẫn chưa bao giờ lên tiếng về những nghi vấn hẹn hò của mình.
            `
        }}/>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={3}>
        <NewsDetail news={{
            title:'Phần phim "Doraemon" mới lập kỷ lục ấn tượng tại phòng vé Việt',
            intro:'Đạt thành công vang dội tại phòng vé Nhật Bản, phần phim thứ 42 của loạt "Doraemon 2D" là sự trở lại ngoạn mục của Mèo Ú cùng những người bạn. Được đánh giá cao về cả phần hình ảnh và nội dung, "Nobita và vùng đất bí ẩn trên bầu trời" là một trong những phần phim được đánh giá là “đáng xem” với các bạn nhỏ và cả người lớn.',
            image:'https://afamilycdn.com/150157425591193600/2023/5/31/1910-1685527153444-1685527153515370769632.jpg',
            content:`Tại Việt Nam, phim có suất chiếu đặc biệt trong 2 ngày 20, 21/5 và chính thức khởi chiếu từ 26/5 vừa qua. Chỉ trong hai ngày sneakshow, phim thu về gần 10 tỷ đồng, trở thành phim "Doraemon" có doanh thu sneakshow (suất chiếu đặc biệt) cao nhất từ trước đến nay. Và trong cuối tuần khởi chiếu đầu tiên, bộ phim tiếp tục xác lập những kỷ lục ấn tượng hơn nữa.
            Cụ thể, trong ba ngày cuối tuần 26, 27, 28/5, "Nobita và vùng đất bí ẩn trên bầu trời" đã vươn lên vị trí số 1 phòng vé, vượt qua cả những tên tuổi sừng sỏ từ Hollywood. Sau 3 ngày khởi chiếu phim thu về tổng cộng hơn 21 tỷ đồng, nâng tổng doanh thu của "Doraemon" lên tới 31 tỷ đồng với xấp xỉ 361.000 lượt khán giả.
            Con số này cũng giúp phần phim thứ 42 trở thành phim anime có doanh thu mở màn cao nhất mọi thời đại tại Việt Nam, vượt qua cả những bom tấn anime làm mưa làm gió phòng vé như "Thám tử lừng danh Conan: Nàng dâu Halloween" hay "One Piece Film Red". Với khởi đầu quá xuất sắc, các fan Mèo Ú hy vọng phần phim mới sẽ vượt qua kỷ lục của phần phim "Nobita và cuộc chiến vũ trụ tí hon 2021" năm ngoái, hiện đang nắm giữ vị trí thứ 3 phim anime có doanh thu cao nhất mọi thời đại.
            "Nobita và vùng đất bí ẩn trên bầu trời" là câu chuyện về phiêu lưu của Doraemon, Nobita và nhóm bạn thân đến với Paradapia - một hòn đảo có hình trăng lưỡi liềm trên bầu trời. Tại vùng đất lý tưởng nơi mọi người đều trở nên hoàn hảo này, hội bạn thân gặp được robot mèo Sonya - một chú mèo máy toàn năng. Thế nhưng, khi cuộc dạo chơi chưa được bao lâu, Doraemon và Nobita dần nhận ra những điều kỳ lạ xung quanh Paradapia. Cả nhóm cùng nhau chiến đấu với những kẻ ác, vạch trần bí ẩn đằng sau tấm màn hoàn hảo của nơi đây.
            Lồng ghép một thông điệp khá “hiện đại” và táo bạo so với những phần phim điện ảnh Doraemon trước đây, phần mới nhất được coi là dễ tiếp cận với khán giả ở nhiều độ tuổi khác nhau. Tuy nhiên, những yếu tố làm nên thương hiệu Doraemon cũng không hề bị bỏ qua. Sự dũng cảm, sẵn sàng chiến đấu vì chính nghĩa vẫn được đề cao thông qua tinh thần không ngại gian khổ của nhóm bạn. Tình bạn “nở rộ” trong phần phim mới, giữa Doraemon và Nobita, giữa Nobita và hội bạn cùng lớp, và đặc biệt, giữa Doraemon và Sonya - chú mèo máy ở Paradapia. Một lần nữa, khán giả sẽ lại rưng rưng xúc động trước những tình cảm đơn thuần, trong sáng nhưng vô cùng mạnh mẽ này.
            `
        }}/>
      </CustomTabPanel>
    </Box>
  );
}