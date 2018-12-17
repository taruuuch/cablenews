<?php

namespace app\models;

use Yii;

/**
 * This is the model class for table "subscribe".
 *
 * @property int $id
 * @property string $email
 * @property string $subday
 */
class Subscribe extends \yii\db\ActiveRecord
{
    /**
     * {@inheritdoc}
     */
    public static function tableName()
    {
        return 'subscribe';
    }

    /**
     * {@inheritdoc}
     */
    public function rules()
    {
        return [
            [['email'], 'required'],
            [['subday'], 'safe'],
            [['email'], 'string', 'max' => 255],
        ];
    }

    /**
     * {@inheritdoc}
     */
    public function attributeLabels()
    {
        return [
            'id' => 'ID',
            'email' => 'Email',
            'subday' => 'Subday',
        ];
    }
}
