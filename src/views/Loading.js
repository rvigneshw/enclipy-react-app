import React from "react";
import { Skeleton, List, Card } from "antd";
const loadingData = [
  {
    id: 1,
  },
  {
    id: 1,
  },
  {
    id: 1,
  },
  {
    id: 1,
  },
  {
    id: 1,
  },
  {
    id: 1,
  },
  {
    id: 1,
  },
  {
    id: 1,
  },
];
const gridConfig = {
  gutter: 16,
  xs: 1,
  sm: 2,
  md: 4,
  lg: 4,
  xl: 5,
  xxl: 6,
};

export default function Loading(props) {
  return (
    <List
      grid={gridConfig}
      dataSource={loadingData}
      renderItem={(item) => (
        <List.Item style={{ padding: "0px" }}>
          <Card hoverable bordered={false} style={{ margin: "0px" }}>
            <Skeleton active />
          </Card>
        </List.Item>
      )}
    />
  );
}

// import { Row, Col, Card } from "antd";
// import PathPlugin from 'rc-tween-one/lib/plugin/PathPlugin';
//
//
// import Tween from 'rc-tween-one';
//
// export default function Loading() {
//   return (
//     <Row justify="center">
//        <Col span={12}>
//     <Tween
//       animation={[
//         // { points: `M 500 400 L 300 400 L 300 200 L 500 200 L 500 400 L 500 200 L 300 200 A 50 50 0 1 1 500 200 L 450 250 L 350 250 L 350 300 L 450 300 L 350 300 L 350 350 L 400 350 L 450 350 ` },
//         { opacity: 1, duration: 1000 },
//         { x: 50, duration: 1000 },
//         { translateX: '100px', repeat: -1, duration: 1000, yoyo: true },
//       ]} style={{ opacity: 0 }}
//     >
//       <div>Loading</div>
//     </Tween>
//     </Col>
//    </Row>
//   );
// }
// // TweenOne.plugins.push(PathPlugin);
// //
// // export default function Loading() {
// //   const p = `M 500 400 L 300 400 L 300 200 L 500 200 L 500 400 L 500 200 L 300 200 A 50 50 0 1 1 500 200 L 450 250 L 350 250 L 350 300 L 450 300 L 350 300 L 350 350 L 400 350 L 450 350 `;
// //
// //   return (
// //     <Row justify="center">
// //       <Col span={6}>
// //         {/* <Card  bordered={false}     hoverable> */}
// //         {/*   <p>Card content</p> */}
// //         {/*   <p>Card content</p> */}
// //         {/*   <a href="https://enclipy-api.herokuapp.com/connect/google"><Button type="primary" icon={<GoogleOutlined />}>Login with Google</Button></a> */}
// //         {/* </Card> */}
// //         <div >
// //           <svg width="600" height="600">
// //   <TweenOne
// //     animation={{ SVGDraw:'50%'}}
// //     d="M 500 400 L 300 400 L 300 200 L 500 200 L 500 400 L 500 200 L 300 200 A 50 50 0 1 1 500 200 L 450 250 L 350 250 L 350 300 L 450 300 L 350 300 L 350 350 L 400 350 L 450 350 "
// //     style={{ fill: 'none', strokeWidth: 20, stroke: '#00000' }}
// //     component="path"
// //   />
// // </svg>
// // {/*       <Tween */}
// // {/*         animation={{ duration: 5000, path: p, repeat: -1, ease: 'linear' }} */}
// // {/*         style={{ */}
// // {/*           opacity: 1, */}
// // {/*           position: 'absolute', */}
// // {/*           width: '30px', */}
// // {/*           height: '30px', */}
// // {/*           left: '-15px', */}
// // {/*           top: '-15px', */}
// // {/*           background: '#FF0000', */}
// // {/*         }} */}
// // {/*       /> */}
// // {/*  */}
// // {/*       <svg> */}
// // {/*         <path fill="#00f" stroke="#0000ff" d={p} /> */}
// // {/*       </svg> */}
// //     </div>
// //       </Col>
// //     </Row>
// //     );
// // }
