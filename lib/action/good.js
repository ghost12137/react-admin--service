const {
  Good
} = require('../db/model');
const { Op } = require('sequelize');

// 查询所有商品信息
const getAllGoods = async (pageBegin = 0, pageSize = 10) => {
  try {
    const result = await Good.findAll({
      offset: Number.parseInt(pageBegin),
      limit: Number.parseInt(pageSize)
    });
    let res = [];
    if (result && result.length) {
      res = result.map(item => JSON.parse(JSON.stringify(item, null, 2)))
    }
    return res;
  } catch (error) {
    console.log('lib action good getAllGoods error: ', error);
  }
};

// 查询商品个数
const getAllGoodsCount = async () => {
  try {
    return Good.count();
  } catch (error) {
    console.log('lib action good getAllGoodsCount error: ', error);
  }
};

// 根据商品id查询
const getGoodById = async (id) => {
  try {
    const good = await Good.findByPk(id);
    if (good) {
      return good;
    } else {
      return null;
    }
  } catch (error) {
    console.log('lib action good getGoodById error: ', error);
  }
};

// 根据商品名字查询
const getGoodByName = async (name) => {
  try {

    const good = await Good.findOne({
      where: {
        name: {
          [Op.like]: name
        }
      },
    });
    if (good) {
      return good.dataValues;
    } else {
      return null;
    }
  } catch (error) {
    console.log('lib action good getGoodByName error: ', error);
  }
};

// 创建商品
const createGood = async (good) => {
  try {
    return Good.create(good);
  } catch (error) {
    console.log('lib action good createGood error: ', error);
  }
};

// 更新用户信息
const updateGood = async (preGoodInstance, newGoodMsg) => {
  try {
    return preGoodInstance.update(newGoodMsg);
  } catch (error) {
    console.log('lib action good updateGood error: ', error);
  }
};

// 删除商品
const deleteGood = async (goodInstance) => {
  try {
    return goodInstance.destroy();
  } catch (error) {
    console.log('lib action good deleteGood error: ', error);
  }
};

module.exports = {
  getAllGoods,
  getAllGoodsCount,
  getGoodById,
  getGoodByName,
  createGood,
  updateGood,
  deleteGood
};