export const listApi = {
  LOGIN: 'auth/login',
  REGISTER: 'auth/register',
  CONFIRM_OTP: 'auth/active-user',
  SEND_OTP_FORGOT_PASSWORD: 'auth/send-otp-forgot-password',
  FORGOT_PASSWORD: 'auth/forgot-password',
  LIST_POST: 'posts/user-tourguide',
  POST_DETAIL: 'posts/user-tourguide',
  GET_COMMENT: 'comments',
  CREATE_POST: 'posts/user-tourguide',
  GET_POST_USER: 'posts/user',
  DELETE_POST_USER: 'posts/user',
  GET_LIST_POST_USER: 'posts/user',
  GET_TOUR: 'tours',
  ORDER: 'orders',
  ORDER_USER: 'orders/user',
  ORDER_PREPAID: 'orders/prepaid',
  ORDER_PAID: 'orders/paid',
  ORDER_START_USER: 'orders/start-user',
  ORDER_END_ORDER: 'orders/end-user',
  USER_SEND_CONSULTATION: 'users/send-consultation',
  UPDATE_PROFILE: 'users/profile',
  AUTH_ME: 'auth/me',
  CHANGE_PASSWORD: 'users/change-password',
  TRANSACTION_USER_WITHDRAW: 'transactions/user-withdraw',
  TRANSACTION_MY_REQUEST_WITHDRAW: 'transactions/my-request-witrhdraw',
};

export const routesName = {
  LoginScreen: 'LoginScreen',
  RegisterScreen: 'RegisterScreen',
  ConfirmOtpScreen: 'ConfirmOtpScreen',
  HomeScreen: 'HomeScreen',
  ForgotPassword: 'ForgotPassword',
  TabHome: 'TabHome',
  PostDetailScreen: 'PostDetailScreen',
  CommentDetailScreen: 'CommentDetailScreen',
  TourDetailScreen: 'TourDetailScreen',
  TourScreen: 'TourScreen',
  CartScreen: 'CartScreen',
  CreatePostScreen: 'CreatePostScreen',
  ListPostUserScreen: 'ListPostUserScreen',
  EditPostScreen: 'EditPostScreen',
  PostUserScreen: 'PostUserScreen',
  ListTourUserScreen: 'ListTourUserScreen',
  OrderDetailScreen: 'OrderDetailScreen',
  ChangePasswordScreen: 'ChangePasswordScreen',
  FamousScreen: 'FamousScreen',
  UpdateProfileScreen: 'UpdateProfileScreen',
  PostScreen: 'PostScreen',
  WithdrawalMoneyScreen: 'WithdrawalMoneyScreen',
  HistoryTransaction: 'HistoryTransaction',
};

export const FamousList = [
  {
    id: 'ha-noi',
    nameKey: 'Hà Nội',
    mainIcon:
      'https://res.cloudinary.com/dfoufefxg/image/upload/v1736617109/hanoi_o20oth.png',
    mainImage:
      'https://res.cloudinary.com/dfoufefxg/image/upload/v1736617193/hoguom_hzwsse.jpg',
    overview: {
      carousel: [
        {
          src: 'https://res.cloudinary.com/dfoufefxg/image/upload/v1736617222/image1_pywyqm.jpg',
          alt: 'Image 1',
          style: {height: 500},
        },
        {
          src: 'https://res.cloudinary.com/dfoufefxg/image/upload/v1736617231/image2_xlthoq.jpg',
          alt: 'Image 2',
          style: {height: 500},
        },
        {
          src: 'https://res.cloudinary.com/dfoufefxg/image/upload/v1736617232/image3_fnnisc.jpg',
          alt: 'Image 3',
          style: {height: 500},
        },
      ],
      content:
        'Hà Nội - **thủ đô nghìn năm văn hiến**, là trung tâm chính trị, văn hóa, khoa học kỹ thuật của cả nước.\n\nThành phố này có *lịch sử lâu đời* và nhiều di sản văn hóa quan trọng. Đây cũng là nơi giao thoa giữa truyền thống và hiện đại, mang đến một vẻ đẹp độc đáo và hấp dẫn.',
    },
    cuisine: {
      banner:
        'https://res.cloudinary.com/dfoufefxg/image/upload/v1736617397/am-thuc_vk4nsk.webp',
      content:
        'Hà Nội nổi tiếng với nền ẩm thực đa dạng và độc đáo, đại diện cho tinh hoa văn hóa Việt Nam. Một số món ăn đặc trưng không thể bỏ qua:\n\n- **Phở Hà Nội**: Món ăn biểu tượng của Việt Nam\n- **Bún chả**: Món ăn yêu thích của người dân và khách du lịch\n- **Chả cá Lã Vọng**: Hương vị đặc trưng không nơi nào có được\n\nHà Nội cũng là nơi tập trung nhiều nhà hàng và quán ăn mang phong cách truyền thống và hiện đại, phục vụ cả khách du lịch trong nước và quốc tế.',
    },
    district: {
      banner:
        'https://res.cloudinary.com/dfoufefxg/image/upload/v1736617396/ban-do_yl4kpm.png',
      content:
        'Hà Nội được chia thành 12 quận huyện, mỗi quận huyện đều có nét đẹp và điểm du lịch riêng. Một số quận huyện nổi tiếng và thu hút nhiều du khách như:\n\n- **Hoàn Kiếm**: Trung tâm của Hà Nội, nơi tập trung nhiều điểm du lịch nổi tiếng\n- **Ba Đình**: Nơi tọa lạc nhiều di tích lịch sử và văn hóa quan trọng\n- **Tây Hồ**: Quận huyện ven hồ nổi tiếng với cảnh đẹp và không khí trong lành',
    },
    attractions: [
      {
        name: 'Văn Miếu',
        image:
          'https://res.cloudinary.com/dfoufefxg/image/upload/v1736617305/van-mieu-quoc-tu-giam_qnj602.png',
        star: '⭐⭐⭐⭐⭐',
      },
      {
        name: 'Chùa Một Cột',
        image:
          'https://res.cloudinary.com/dfoufefxg/image/upload/v1736617305/chua-mot-cot_lielks.png',
        star: '⭐⭐⭐⭐⭐',
      },
      {
        name: 'Lăng Bác',
        image:
          'https://res.cloudinary.com/dfoufefxg/image/upload/v1736617303/lang-bac_g9fc1w.png',
        star: '⭐⭐⭐⭐⭐',
      },
      {
        name: 'Nhà Thờ Lớn',
        image:
          'https://res.cloudinary.com/dfoufefxg/image/upload/v1736617304/nha-tho-lon_fqmmmz.png',
        star: '⭐⭐⭐⭐⭐',
      },
      {
        name: 'Hồ Hoàn Kiếm',
        image:
          'https://res.cloudinary.com/dfoufefxg/image/upload/v1736617302/ho-hoan-kiem_erdij6.png',
        star: '⭐⭐⭐⭐⭐',
      },
    ],
  },
  {
    id: 'da-nang',
    nameKey: 'Đà Nẵng',
    mainIcon:
      'https://res.cloudinary.com/dfoufefxg/image/upload/v1736617450/logo_bvsx92.webp',
    mainImage:
      'https://res.cloudinary.com/dfoufefxg/image/upload/v1736617472/background_wnphb6.jpg',
    overview: {
      carousel: [
        {
          src: 'https://res.cloudinary.com/dfoufefxg/image/upload/v1736617494/image1_n0ciu6.webp',
          alt: 'Bãi biển Mỹ Khê',
          style: {height: 500},
        },
        {
          src: 'https://res.cloudinary.com/dfoufefxg/image/upload/v1736617494/image2_acivg5.jpg',
          alt: 'Cầu Vàng - Bà Nà Hills',
          style: {height: 500},
        },
        {
          src: 'https://res.cloudinary.com/dfoufefxg/image/upload/v1736617495/image3_tayp0n.jpg',
          alt: 'Cầu Rồng về đêm',
          style: {height: 500},
        },
      ],
      content:
        'Đà Nẵng - **thành phố đáng sống nhất Việt Nam**, nổi tiếng với cảnh quan thiên nhiên tuyệt đẹp, các cây cầu biểu tượng và dịch vụ du lịch hiện đại. Với vị trí trung tâm miền Trung, Đà Nẵng kết nối thuận tiện đến các di sản thế giới như Hội An, Mỹ Sơn và Huế.',
    },
    cuisine: {
      banner:
        'https://res.cloudinary.com/dfoufefxg/image/upload/v1736617561/am-thuc-da-nang_yg6s9f.jpg',
      content:
        'Ẩm thực Đà Nẵng là sự kết hợp hài hòa giữa hương vị miền Trung và biển cả. Một số món ngon không thể bỏ qua gồm:\n\n- **Mì Quảng**: Đặc sản trứ danh với sợi mì dai mềm, nước dùng đậm đà và các loại topping phong phú\n- **Bánh tráng cuốn thịt heo**: Món ăn thanh mát, kết hợp bánh tráng, thịt heo và rau sống chấm mắm nêm\n- **Hải sản Đà Nẵng**: Tươi ngon, đa dạng như cua, tôm, mực và cá\n- **Bánh xèo**: Vỏ bánh giòn tan, nhân tôm thịt và giá đỗ, ăn kèm rau sống\n\nĐà Nẵng còn nổi bật với các món ăn đường phố như ốc hút, chè sầu và bún chả cá.',
    },
    district: {
      banner:
        'https://res.cloudinary.com/dfoufefxg/image/upload/v1736617560/ban-do-da-nang_v3lzzw.webp',
      content:
        'Đà Nẵng gồm các quận, huyện với vẻ đẹp và phong cách riêng biệt. Một số điểm đến nổi bật gồm:\n\n- **Bãi biển Mỹ Khê**: Một trong những bãi biển đẹp nhất hành tinh\n- **Bà Nà Hills**: Khu du lịch trên núi với cảnh sắc tuyệt đẹp và Cầu Vàng nổi tiếng\n- **Ngũ Hành Sơn**: Cụm núi đá cẩm thạch với hệ thống hang động và chùa chiền cổ kính\n- **Cầu Rồng**: Cây cầu biểu tượng với thiết kế độc đáo, phun lửa và nước vào cuối tuần\n- **Hải Vân Quan**: Di tích lịch sử nằm trên đèo Hải Vân với cảnh quan hùng vĩ',
    },
    attractions: [
      {
        name: 'Bãi biển Mỹ Khê',
        image:
          'https://res.cloudinary.com/dfoufefxg/image/upload/v1736617636/my-khe-beach_mrkng3.jpg',
        star: '⭐⭐⭐⭐⭐',
      },
      {
        name: 'Bà Nà Hills',
        image:
          'https://res.cloudinary.com/dfoufefxg/image/upload/v1736617638/ba-na-hills_pti1xb.jpg',
        star: '⭐⭐⭐⭐⭐',
      },
      {
        name: 'Ngũ Hành Sơn',
        image:
          'https://res.cloudinary.com/dfoufefxg/image/upload/v1736617637/ngu-hanh-son_yw6qco.jpg',
        star: '⭐⭐⭐⭐⭐',
      },
      {
        name: 'Cầu Rồng',
        image:
          'https://res.cloudinary.com/dfoufefxg/image/upload/v1736617633/cau-rong_jcp25y.jpg',
        star: '⭐⭐⭐⭐⭐',
      },
      {
        name: 'Hải Vân Quan',
        image:
          'https://res.cloudinary.com/dfoufefxg/image/upload/v1736617635/hai-van-quan_klpltl.jpg',
        star: '⭐⭐⭐⭐⭐',
      },
    ],
  },
  {
    id: 'nha-trang',
    nameKey: 'Nha Trang',
    mainIcon:
      'https://res.cloudinary.com/dfoufefxg/image/upload/v1736617973/logo_rcis50.png',
    mainImage:
      'https://res.cloudinary.com/dfoufefxg/image/upload/v1736617979/background_fyrsat.jpg',
    overview: {
      carousel: [
        {
          src: 'https://res.cloudinary.com/dfoufefxg/image/upload/v1736617976/image1_uo1z6y.jpg',
          alt: 'Bãi biển Nha Trang',
          style: {height: 500},
        },
        {
          src: 'https://res.cloudinary.com/dfoufefxg/image/upload/v1736617977/image2_ihryzv.webp',
          alt: 'Vinpearl Land',
          style: {height: 500},
        },
        {
          src: 'https://res.cloudinary.com/dfoufefxg/image/upload/v1736617977/image3_p3egzz.webp',
          alt: 'Tháp Bà Ponagar',
          style: {height: 500},
        },
      ],
      content:
        'Nha Trang - **thành phố biển đẹp nhất Việt Nam**, nổi tiếng với bãi cát trắng dài, làn nước trong xanh và các đảo hoang sơ. Nha Trang không chỉ là điểm đến lý tưởng để thư giãn mà còn là trung tâm du lịch nổi bật với các hoạt động thể thao dưới nước, các khu nghỉ dưỡng sang trọng và di tích lịch sử văn hóa.',
    },
    cuisine: {
      banner:
        'ahttps://res.cloudinary.com/dfoufefxg/image/upload/v1736617978/am-thuc-nhatrang_hawkdd.webp',
      content:
        'Ẩm thực Nha Trang là sự kết hợp giữa hương vị biển cả và các món ăn đặc trưng của miền Trung. Một số món ngon không thể bỏ qua gồm:\n\n- **Bánh canh chả cá**: Đặc sản nổi tiếng với nước dùng ngọt thanh và chả cá tươi ngon\n- **Bún sứa Nha Trang**: Món ăn dân dã với sứa tươi, kết hợp với bún và rau sống\n- **Nem Ninh Hòa**: Món nem cuốn đặc biệt với các loại thịt heo, bò, tôm ăn kèm rau sống\n- **Hải sản tươi sống**: Nha Trang nổi tiếng với các loại hải sản tươi ngon như mực, tôm, cá và nghêu\n- **Yến sào**: Món ăn bổ dưỡng từ tổ yến được chế biến thành các món súp, chè, hoặc món ăn bổ dưỡng.',
    },
    district: {
      banner:
        'https://res.cloudinary.com/dfoufefxg/image/upload/v1736617978/ban-do-nhatrang_kfo5dt.jpg',
      content:
        'Nha Trang là thành phố thuộc tỉnh Khánh Hòa, với những khu vực du lịch nổi bật như:\n\n- **Bãi biển Nha Trang**: Bãi biển dài với cát trắng mịn và làn nước trong xanh, là điểm đến lý tưởng cho các hoạt động thể thao dưới nước\n- **Vinpearl Land**: Khu vui chơi giải trí nổi tiếng với công viên nước, khu vực vui chơi gia đình và các resort sang trọng\n- **Đảo Hòn Mun**: Đảo hoang sơ nổi tiếng với bãi biển đẹp và là khu vực lý tưởng cho các hoạt động lặn biển\n- **Tháp Bà Ponagar**: Di tích lịch sử Chăm cổ kính, nổi bật với các công trình tháp và tượng đài\n- **Hòn Tằm**: Một trong những hòn đảo đẹp, nổi tiếng với các khu nghỉ dưỡng và các dịch vụ spa cao cấp',
    },
    attractions: [
      {
        name: 'Bãi biển Nha Trang',
        image:
          'https://res.cloudinary.com/dfoufefxg/image/upload/v1736617978/nhatrang-beach_nlnakq.jpg',
        star: '⭐⭐⭐⭐⭐',
      },
      {
        name: 'Vinpearl Land',
        image:
          'https://res.cloudinary.com/dfoufefxg/image/upload/v1736617977/vinpearl-land_xjgouj.jpg',
        star: '⭐⭐⭐⭐⭐',
      },
      {
        name: 'Đảo Hòn Mun',
        image:
          'https://res.cloudinary.com/dfoufefxg/image/upload/v1736617978/hon-mun_s0srms.jpg',
        star: '⭐⭐⭐⭐⭐',
      },
      {
        name: 'Tháp Bà Ponagar',
        image:
          'https://res.cloudinary.com/dfoufefxg/image/upload/v1736617979/thap-ba-ponagar_fdwxkm.jpg',
        star: '⭐⭐⭐⭐⭐',
      },
      {
        name: 'Hòn Tằm',
        image:
          'https://res.cloudinary.com/dfoufefxg/image/upload/v1736617975/hon-tam_dynaq2.jpg',
        star: '⭐⭐⭐⭐⭐',
      },
    ],
  },
  {
    id: 'phu-quoc',
    nameKey: 'Phú Quốc',
    mainIcon:
      'https://res.cloudinary.com/dfoufefxg/image/upload/v1736618177/logo_tqvdyf.jpg',
    mainImage:
      'https://res.cloudinary.com/dfoufefxg/image/upload/v1736618180/background_eevpre.jpg',
    overview: {
      carousel: [
        {
          src: 'https://res.cloudinary.com/dfoufefxg/image/upload/v1736618173/image1_kr04gy.jpg',
          alt: 'Bãi Sao Phú Quốc',
          style: {height: 500},
        },
        {
          src: 'https://res.cloudinary.com/dfoufefxg/image/upload/v1736618175/image2_yw6v4p.jpg',
          alt: 'Vườn Quốc gia Phú Quốc',
          style: {height: 500},
        },
        {
          src: 'https://res.cloudinary.com/dfoufefxg/image/upload/v1736618176/image3_h1uiyp.jpg',
          alt: 'Chợ đêm Phú Quốc',
          style: {height: 500},
        },
      ],
      content:
        'Phú Quốc - **hòn đảo ngọc của Việt Nam**, nổi tiếng với những bãi biển hoang sơ, cát trắng mịn và nước biển trong xanh. Là điểm đến lý tưởng cho những ai muốn thư giãn, khám phá thiên nhiên, Phú Quốc còn thu hút du khách với các hoạt động vui chơi, nghỉ dưỡng cao cấp, và các khu nghỉ dưỡng sang trọng bên bờ biển.',
    },
    cuisine: {
      banner:
        'https://res.cloudinary.com/dfoufefxg/image/upload/v1736618179/am-thuc-phuquoc_x4h47o.jpg',
      content:
        'Ẩm thực Phú Quốc đặc trưng với hải sản tươi ngon và các món ăn từ nguyên liệu địa phương. Một số món ăn nổi bật mà bạn không thể bỏ qua gồm:\n\n- **Gỏi cá trích**: Món gỏi tươi ngon với cá trích, rau sống và nước mắm pha\n- **Bánh canh chả cá Phú Quốc**: Món ăn đậm đà với sợi bánh canh mềm và chả cá tươi\n- **Cơm chiên ghẹ**: Món cơm chiên với ghẹ tươi, có vị ngọt và thơm\n- **Nhum biển nướng mỡ hành**: Món ăn từ nhum biển, nướng cùng mỡ hành thơm lừng\n- **Rượu sim Phú Quốc**: Loại rượu đặc sản làm từ quả sim, có vị ngọt, chua nhẹ và rất đặc trưng.',
    },
    district: {
      banner:
        'https://res.cloudinary.com/dfoufefxg/image/upload/v1736618183/ban-do-phuquoc_fktgld.jpg',
      content:
        'Phú Quốc là hòn đảo lớn nhất của Việt Nam, với các khu vực du lịch nổi bật như:\n\n- **Dương Đông**: Trung tâm hành chính và du lịch của Phú Quốc, nơi có các bãi biển đẹp và chợ đêm Phú Quốc\n- **Cửa Cạn**: Khu vực nổi tiếng với bãi biển hoang sơ và các khu nghỉ dưỡng sang trọng\n- **Gành Dầu**: Nơi có các resort cao cấp, gần Vườn Quốc gia Phú Quốc\n- **An Thới**: Khu vực phía Nam đảo với các khu nghỉ dưỡng cao cấp, khu vui chơi giải trí, và các bãi biển tuyệt đẹp\n- **Vườn Quốc gia Phú Quốc**: Khu bảo tồn thiên nhiên với hệ sinh thái đa dạng và các hoạt động trekking, khám phá thiên nhiên.',
    },
    attractions: [
      {
        name: 'Bãi Sao',
        image:
          'https://res.cloudinary.com/dfoufefxg/image/upload/v1736618182/bai-sao_aq8xoo.jpg',
        star: '⭐⭐⭐⭐⭐',
      },
      {
        name: 'Vườn Quốc gia Phú Quốc',
        image:
          'https://res.cloudinary.com/dfoufefxg/image/upload/v1736618178/voon-quoc-gia-phu-quoc_irvefj.jpg',
        star: '⭐⭐⭐⭐⭐',
      },
      {
        name: 'Chợ đêm Phú Quốc',
        image:
          'https://res.cloudinary.com/dfoufefxg/image/upload/v1736618176/image3_h1uiyp.jpg',
        star: '⭐⭐⭐⭐⭐',
      },
      {
        name: 'Vinpearl Safari',
        image:
          'https://res.cloudinary.com/dfoufefxg/image/upload/v1736618178/vinpearl-safari_v8hmbz.jpg',
        star: '⭐⭐⭐⭐⭐',
      },
      {
        name: 'Dinh Cậu',
        image:
          'https://res.cloudinary.com/dfoufefxg/image/upload/v1736618172/dinh-cau_e2pmcv.jpg',
        star: '⭐⭐⭐⭐⭐',
      },
    ],
  },
  {
    id: 'ho-chi-minh',
    nameKey: 'TP.HCM',
    mainIcon:
      'https://res.cloudinary.com/dfoufefxg/image/upload/v1736618337/logo_bcjkl3.png',
    mainImage:
      'https://res.cloudinary.com/dfoufefxg/image/upload/v1736618342/background_kkcfxq.jpg',
    overview: {
      carousel: [
        {
          src: 'https://res.cloudinary.com/dfoufefxg/image/upload/v1736618334/image1_oam0jr.webp',
          alt: 'Nhà thờ Đức Bà',
          style: {height: 500},
        },
        {
          src: 'https://res.cloudinary.com/dfoufefxg/image/upload/v1736618335/image2_yt0dob.webp',
          alt: 'Dinh Độc Lập',
          style: {height: 500},
        },
        {
          src: 'https://res.cloudinary.com/dfoufefxg/image/upload/v1736618336/image3_dilpix.jpg',
          alt: 'Phố đi bộ Nguyễn Huệ',
          style: {height: 500},
        },
      ],
      content:
        'TP.HCM - **trung tâm kinh tế, văn hóa, và du lịch của Việt Nam**, là thành phố sôi động và hiện đại nhất của đất nước. Với sự pha trộn giữa kiến trúc cổ điển và hiện đại, TP.HCM thu hút du khách với các di tích lịch sử, khu mua sắm, nhà hàng sang trọng, và cuộc sống nhộn nhịp về đêm.',
    },
    cuisine: {
      banner:
        'https://res.cloudinary.com/dfoufefxg/image/upload/v1736618340/am-thuc-tphcm_v9si1t.jpg',
      content:
        'Ẩm thực TP.HCM là sự kết hợp của nhiều nền văn hóa, từ món ăn miền Nam cho đến các món ăn quốc tế. Một số món ăn nổi bật mà bạn không thể bỏ qua:\n\n- **Bánh mì Sài Gòn**: Món ăn đường phố nổi tiếng với bánh mì giòn, nhân thịt, pate, rau sống và nước sốt đậm đà\n- **Hủ tiếu**: Món súp với nước dùng thơm ngon, ăn kèm với bánh phở hoặc mì, thịt heo, tôm, mực\n- **Cơm tấm**: Món cơm với thịt nướng, bì, chả, ăn kèm với dưa chua và nước mắm\n- **Gỏi cuốn**: Cuốn tươi với tôm, thịt heo, bún và rau sống, chấm với nước mắm pha\n- **Chè Sài Gòn**: Các loại chè ngọt mát, từ chè ba màu đến chè đậu xanh, chè bánh lọt.',
    },
    district: {
      banner:
        'https://res.cloudinary.com/dfoufefxg/image/upload/v1736618343/ban-do-tphcm_tvwd9b.jpg',
      content:
        'TP.HCM là một thành phố lớn, bao gồm nhiều quận và huyện nổi bật như:\n\n- **Quận 1**: Trung tâm của thành phố, nơi có các địa điểm nổi tiếng như Nhà thờ Đức Bà, Dinh Độc Lập, phố đi bộ Nguyễn Huệ\n- **Quận 3**: Khu vực sầm uất với các công viên, bảo tàng, và các quán cà phê nổi tiếng\n- **Quận 7**: Khu vực phát triển mới với các trung tâm thương mại lớn và khu dân cư hiện đại\n- **Quận Bình Thạnh**: Nơi có các công trình kiến trúc độc đáo và nhiều khu vực ăn uống hấp dẫn\n- **Thủ Đức**: Vùng ngoại ô với các khu công viên, hồ, và những làng nghề truyền thống.',
    },
    attractions: [
      {
        name: 'Nhà thờ Đức Bà',
        image:
          'https://res.cloudinary.com/dfoufefxg/image/upload/v1736618339/nha-tho-duc-ba_wohoyn.jpg',
        star: '⭐⭐⭐⭐⭐',
      },
      {
        name: 'Dinh Độc Lập',
        image:
          'https://res.cloudinary.com/dfoufefxg/image/upload/v1736618332/dinh-doc-lap_wtulyr.jpg',
        star: '⭐⭐⭐⭐⭐',
      },
      {
        name: 'Phố đi bộ Nguyễn Huệ',
        image:
          'https://res.cloudinary.com/dfoufefxg/image/upload/v1736618339/pho-di-bo-nguyen-hue_bcsgjn.jpg',
        star: '⭐⭐⭐⭐⭐',
      },
      {
        name: 'Chợ Bến Thành',
        image:
          'https://res.cloudinary.com/dfoufefxg/image/upload/v1736618332/cho-ben-thanh_ihleat.jpg',
        star: '⭐⭐⭐⭐⭐',
      },
      {
        name: 'Bitexco Financial Tower',
        image:
          'https://res.cloudinary.com/dfoufefxg/image/upload/v1736618344/bitexco-financial-tower_lxt3ef.jpg',
        star: '⭐⭐⭐⭐⭐',
      },
    ],
  },
  {
    id: 'da-lat',
    nameKey: 'Đà Lạt',
    mainIcon:
      'https://res.cloudinary.com/dfoufefxg/image/upload/v1736618515/logo_izeimy.png',
    mainImage:
      'https://res.cloudinary.com/dfoufefxg/image/upload/v1736618519/background_idghs7.jpg',
    overview: {
      carousel: [
        {
          src: 'https://res.cloudinary.com/dfoufefxg/image/upload/v1736618512/image1_kkybvm.jpg',
          alt: 'Hồ Xuân Hương',
          style: {height: 500},
        },
        {
          src: 'https://res.cloudinary.com/dfoufefxg/image/upload/v1736618513/image2_zkl6nf.jpg',
          alt: 'Thung Lũng Tình Yêu',
          style: {height: 500},
        },
        {
          src: 'https://res.cloudinary.com/dfoufefxg/image/upload/v1736618514/image3_dqwrfe.jpg',
          alt: 'Dinh Bảo Đại',
          style: {height: 500},
        },
      ],
      content:
        'Đà Lạt - **thành phố ngàn hoa**, nổi tiếng với khí hậu mát mẻ quanh năm và những cảnh quan thiên nhiên tuyệt đẹp. Được biết đến như một điểm đến lý tưởng cho du lịch nghỉ dưỡng, Đà Lạt thu hút du khách bởi những vườn hoa rực rỡ, hồ nước trong xanh, những ngọn đồi thơ mộng và không khí trong lành.',
    },
    cuisine: {
      banner:
        'https://res.cloudinary.com/dfoufefxg/image/upload/v1736618520/am-thuc-dalat_wkwatd.jpg',
      content:
        'Ẩm thực Đà Lạt đặc trưng với nhiều món ăn ngon và lạ miệng. Một số món ăn đặc sản không thể bỏ qua là:\n\n- **Bánh tráng nướng Đà Lạt**: Món ăn vặt nổi tiếng, bánh tráng giòn rụm ăn kèm với trứng, xúc xích và rau\n- **Lẩu gà lá é**: Món lẩu với hương vị đặc trưng từ lá é và thịt gà tươi ngon\n- **Mứt Đà Lạt**: Các loại mứt hoa quả tươi ngon như mứt dâu, mứt cà chua, mứt hồng, mứt dứa\n- **Sữa đậu nành Đà Lạt**: Món đồ uống truyền thống, ngọt ngào và bổ dưỡng\n- **Chè đậu ván**: Món chè thanh mát với đậu ván, nước cốt dừa, và đường phèn.',
    },
    district: {
      banner:
        'https://res.cloudinary.com/dfoufefxg/image/upload/v1736618520/ban-do-dalat_q8fbds.jpg',
      content:
        'Đà Lạt là thành phố trực thuộc tỉnh Lâm Đồng, với các khu vực du lịch nổi bật như:\n\n- **Hồ Xuân Hương**: Hồ nước thơ mộng giữa lòng thành phố, là nơi lý tưởng để đi dạo và chèo thuyền\n- **Thung Lũng Tình Yêu**: Một trong những điểm đến nổi tiếng với không gian yên bình và cảnh quan lãng mạn\n- **Chùa Linh Phước**: Nổi tiếng với tượng Phật cao nhất Việt Nam và kiến trúc độc đáo\n- **Dinh Bảo Đại**: Nơi nghỉ dưỡng của vị vua cuối cùng của Việt Nam, với kiến trúc cổ kính\n- **Vườn hoa Đà Lạt**: Nơi trưng bày các loại hoa đặc trưng của Đà Lạt, như hoa hồng, hoa lan, hoa cúc',
    },
    attractions: [
      {
        name: 'Hồ Xuân Hương',
        image:
          'https://res.cloudinary.com/dfoufefxg/image/upload/v1736618511/ho-xuan-huong_qldson.jpg',
        star: '⭐⭐⭐⭐⭐',
      },
      {
        name: 'Thung Lũng Tình Yêu',
        image:
          'https://res.cloudinary.com/dfoufefxg/image/upload/v1736618516/thung-lung-tinh-yeu_ocjjau.jpg',
        star: '⭐⭐⭐⭐⭐',
      },
      {
        name: 'Chùa Linh Phước',
        image:
          'https://res.cloudinary.com/dfoufefxg/image/upload/v1736618509/chua-linh-phuoc_oi4rks.jpg',
        star: '⭐⭐⭐⭐⭐',
      },
      {
        name: 'Dinh Bảo Đại',
        image:
          'https://res.cloudinary.com/dfoufefxg/image/upload/v1736618509/dinh-bao-dai_lhptzb.jpg',
        star: '⭐⭐⭐⭐⭐',
      },
      {
        name: 'Vườn hoa Đà Lạt',
        image:
          'https://res.cloudinary.com/dfoufefxg/image/upload/v1736618517/vuon-hoa-dalat_r3irk5.jpg',
        star: '⭐⭐⭐⭐⭐',
      },
    ],
  },
];
