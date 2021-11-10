import React from 'react';
import AlbumList from './components/AlbumList';

const albumList = [
    {
        id: 1,
        name:"Rap Việt Ngày Nay",
        thumbnailUrl: "https://photo-resize-zmp3.zadn.vn/w320_r1x1_jpeg/cover/b/7/0/9/b70914fb0936d7437f786fc680e3830f.jpg", 
    },
    {
        id: 2,
        name:"EDM Now",
        thumbnailUrl: "https://photo-resize-zmp3.zadn.vn/w320_r1x1_jpeg/cover/6/4/3/d/643d646a008264bb0d56e40b145faaf6.jpg", 
    },
    {
        id: 3,
        name:"Đóa Hồng Nhạc Việt",
        thumbnailUrl:"https://photo-resize-zmp3.zadn.vn/w320_r1x1_jpeg/cover/3/3/1/5/3315338ae938e044e716cd677f965e88.jpg", 
    },
    {
        id: 4,
        name:"Tản Mạn Cùng Inde Việt",
        thumbnailUrl:"https://photo-resize-zmp3.zadn.vn/w320_r1x1_jpeg/cover/a/a/0/a/aa0a8541dd99c557c878aa523efa4538.jpg",
    },
    
]

function AlbumFeature() {
    return (
        <div>
            <h2>Sắc  Màu Âm Nhạc</h2>
            <AlbumList albumList={albumList}/>
        </div>
    );
}

export default AlbumFeature;