const UUID = require('uuid');
const fs = require('fs');
const path = require('path');

const {
  getAllGoods,
  getAllGoodsCount,
  getGoodById,
  getGoodByName,
  createGood,
  updateGood,
  deleteGood,
} = require('../../lib/action/good');

module.exports = {
  getGoodList: async (query) => {
    const {
      currentPage = 1,
      pageSize = 10
    } = query;
    const sliceBegin = (currentPage - 1) * pageSize;
    let goodList = [];
    let goodsCount = 0;
    let status = 400;
    let message = '获取商品列表失败'
    try {
      goodList = await getAllGoods(sliceBegin, pageSize);

      goodsCount = await getAllGoodsCount();

      status = 200;
      message = '获取商品列表成功';
    } catch (error) {
      console.log('service admin goods getGoodList error: ', error);
    }

    return {
      data: goodList,
      status,
      message,
      total: goodsCount,
    };
  },
  createGood: async (ctx) => {
    const body = ctx.request.body;
    const { name, description } = body;

    let status = 400;
    let message = '创建商品失败';
    let data = '';

    try {
      const good = await getGoodByName(name);
      if (good) {
        message = '该商品名已存在';
      } else {

        const imgFiles = ctx.request.files.imgFileList;
        const imageNameList = [];
        let goodImg = '';
        if (imgFiles) {
          if (!(imgFiles instanceof Array)) {
            goodImg = '/images/' + imgFiles.name;
          } else {
            imgFiles.forEach(imageFile => imageNameList.push('/images/' + imageFile.name));
            goodImg = imageNameList.join(';');
          }
        }

        const newGood = {
          id: UUID.v1(),
          name,
          description,
          goodImg
        };

        await createGood(newGood);

        status = 200;
        data = '创建商品成功';
        message = '创建商品成功';
      }
    } catch (error) {
      console.log('service admin goods createGood error: ', error);
    }

    return {
      status,
      data,
      message,
    };
  },
  updateGood: async (ctx) => {
    const body = ctx.request.body;
    const { id, name, description, imgFileList } = body;
    console.log('body: ', body)
    let status = 400;
    let message = '修改商品失败';
    let data = '';

    try {
      const good = await getGoodById(id);
      if (!good) {
        message = '未找到该商品';
      } else {
        let preGoodImgList = good.dataValues.goodImg
          .split(';')
          .filter(imgUrl => imgUrl !== '');

        const baseDir = __dirname.split('\\');
        baseDir.pop();
        baseDir.pop();
        baseDir.push('public');

        let updateGoodImgList = [];
        if (imgFileList) {
          if (typeof imgFileList === 'string') {
            updateGoodImgList.push(imgFileList);
          } else {
            updateGoodImgList = imgFileList;
          }
        }

        // 遍历两个图片数组，删除本地图片
        preGoodImgList = preGoodImgList.filter(imgUrl => {
          if (!updateGoodImgList.includes(imgUrl)) {
            try {
              fs.unlinkSync(path.join(baseDir.join('\\'), imgUrl));
            } catch (error) {
              console.error(console.log('service admin goods update good image delte error: ', error));
            }
          }
          return updateGoodImgList.includes(imgUrl);
        });

        const imgFiles = ctx.request.files.imgFileList;
        const imageNameList = [];
        if (imgFiles) {
          if (!(imgFiles instanceof Array)) {
            preGoodImgList.push('/images/' + imgFiles.name);
          } else {
            imgFiles.forEach(imageFile => imageNameList.push('/images/' + imageFile.name));
            preGoodImgList.concat(imgFiles);
          }
        }

        await updateGood(good, {
          id,
          name,
          description,
          goodImg: preGoodImgList.join(';')
        })

        status = 200;
        data = '修改商品成功';
        message = '修改商品成功';
      }
    } catch (error) {
      console.log('service admin goods updateGood error: ', error);
    }

    return {
      status,
      data,
      message,
    };
  },
  deleteGood: async (id) => {
    let status = 400;
    let message = '删除商品失败';
    let data = '';
    try {
      const good = await getGoodById(id);
      if (good) {
        const goodImg = good.dataValues.goodImg;
        const imgList = goodImg.split(';').filter(imgUrl => imgUrl !== '');
        const baseDir = __dirname.split('\\');
        baseDir.pop();
        baseDir.pop();
        baseDir.push('public');
        imgList.forEach(imgUrl => {
          try {
            fs.unlinkSync(path.join(baseDir.join('\\'), imgUrl));
          } catch (error) {
            console.log('service admin goods delete good image error: ', error)
          }
        })
        await deleteGood(good);
        status = 200;
        message = '删除商品成功';
        data = '删除商品成功';
      } else {
        message = '未找到该商品';
      }
    } catch (error) {
      console.log('service admin goods deleteGood error: ', error);
    }

    return {
      status,
      message,
      data
    };
  },
};