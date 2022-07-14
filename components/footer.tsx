import type { NextPage } from 'next'


const footer: NextPage = () => {

  return (
    <div className="bg-sky-900" >
			<div className="ft_wrap">
				<div className="ft_menu">
					<ul>
						<li><a href="/html/common_ui/content/check_agreement.php">이용약관</a></li>
						<li><a href="/html/common_ui/content/check_privacy.php">개인정보취급방침</a></li>
						<li><a href="/html/common_ui/content/alliance.php">제휴/섭외/도매/총판 문의</a></li>
						<li><a href="/html/common_ui/customer/recruit.php">채용공고</a></li>
						<li className="last"><a href="/html/common_ui/customer/customer.php">고객센터</a></li>
					</ul>
				</div>
				<div className="ft_bottom">
					<div className="inner">
						<div className="address">
							<div>
								(주)보듬컴퍼니<span>대표: 강형욱</span> 
								<span>사업자등록번호: 114-87-19376</span>
								<span>통신판매업허가번호: 2020-진접오남-0309</span><br/>
								경기도 남양주시 오남읍 진건오남로667번길 64-33
								<span>전화: 1800-6358</span><br/>
							</div>
							<p className="copy">COPYRIGHT(C) 2017 (주)보듬컴퍼니 All right reserved.</p>
						</div>
					</div>
				</div>
				<div className="bodeumShop pcVer">
					<a href="/html/edu_movie/index.php"><img src="/html/common/img/bodeumEdu.png" /></a>
				</div>
				<div className="bodeumShop tabletVer">
					<a href="/html/edu_movie/index.php"><img src="/html/common/img/bodeumEdu_m.png" /></a>
				</div>
			</div>
    </div>
  )
}

export default footer
