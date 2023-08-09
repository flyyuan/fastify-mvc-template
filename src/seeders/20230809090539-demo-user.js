/*
 * @Author: shibaoyuan2 shibaoyuan2@yy.com
 * @Date: 2023-08-09 17:05:39
 * @LastEditors: shibaoyuan2 shibaoyuan2@yy.com
 * @LastEditTime: 2023-08-09 17:08:39
 * @FilePath: /fastify-mvc-template/src/seeders/20230809090539-demo-user.js
 * @Description: 
 */
'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
