import { Col, Row } from 'antd';
import Link from 'next/link';
import ProductCard from '../components/product/ProductCard';

function HomePage() {
  const mockProducts = new Array(30).fill({
    title: '무료나눔 !! 국내산 기모 말장화 여성 앵클부츠 나눔방법 필독!',
    price: '840,000',
    thumnali:
      'https://ccimg.hellomarket.com/images/2020/item/12/29/21/4342653_3158953_1.jpg?size=s4',
  });

  return (
    <Row className="home">
      {mockProducts.map(({ title, price, thumnali }, i) => (
        <Col span="12" key={i} style={{ padding: 10 }} md={6}>
          <Link href="/">
            <a>
              <ProductCard title={title} price={price} thumnali={thumnali} />
            </a>
          </Link>
        </Col>
      ))}
    </Row>
  );
}

export default HomePage;
