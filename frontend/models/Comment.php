<?php

namespace app\models;

use Yii;

/**
 * This is the model class for table "comment".
 *
 * @property int $id
 * @property int $news_id
 * @property string $author
 * @property string $description
 * @property string $publication
 * @property int $moderation
 */
class Comment extends \yii\db\ActiveRecord
{
    /**
     * {@inheritdoc}
     */
    public static function tableName()
    {
        return 'comment';
    }

    /**
     * {@inheritdoc}
     */
    public function rules()
    {
        return [
            [['news_id', 'author', 'description'], 'required'],
            [['news_id', 'moderation'], 'integer'],
            [['author', 'description'], 'string'],
            [['publication'], 'safe'],
        ];
    }

    /**
     * {@inheritdoc}
     */
    public function attributeLabels()
    {
        return [
            'id' => 'ID',
            'news_id' => 'News ID',
            'author' => 'Author',
            'description' => 'Description',
            'publication' => 'Publication',
            'moderation' => 'Moderation',
        ];
    }
}
