import React from 'react';
import '../App.css';
// import First from './Image/o1.jpg';
import ImageGallery from 'react-image-gallery';

const images = [
    {

        original: 'https://picsum.photos/id/1018/1000/600/',
        // thumbnail: 'https://picsum.photos/id/1018/250/',
        // original: 'https://picsum.photos/id/200/300',
        // thumbnail: '',
    },
    {
        original: 'https://picsum.photos/id/1015/1000/600/',
        // original: {First},
        // thumbnail: 'https://picsum.photos/id/1015/250/150/',
    },
    {
        original: 'https://picsum.photos/id/1019/1000/600/',
        // thumbnail: 'https://picsum.photos/id/1019/250/150/',
    },
];

class MyGallery extends React.Component {
    render() {
        return <ImageGallery items={images} />;
    }
}
export default MyGallery;