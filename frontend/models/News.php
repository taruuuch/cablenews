<?php

namespace app\models;

use Yii;

/**
 * This is the model class for table "news".
 *
 * @property int $id
 * @property string $title
 * @property string $poster
 * @property string $description
 * @property string $publication
 * @property string $author
 * @property string $sourse
 * @property string $tags
 */
class News extends \yii\db\ActiveRecord
{
    /**
     * {@inheritdoc}
     */
    public static function tableName()
    {
        return 'news';
    }

    /**
     * {@inheritdoc}
     */
    public function rules()
    {
        return [
            [['title', 'poster', 'description', 'publication', 'author', 'sourse', 'tags'], 'required'],
            [['title', 'poster', 'description', 'sourse', 'tags'], 'string'],
            [['publication'], 'safe'],
            [['author'], 'string', 'max' => 255],
        ];
    }

    /**
     * {@inheritdoc}
     */
    public function attributeLabels()
    {
        return [
            'id' => 'ID',
            'title' => 'Title',
            'poster' => 'Poster',
            'description' => 'Description',
            'publication' => 'Publication',
            'author' => 'Author',
            'sourse' => 'Sourse',
            'tags' => 'Tags',
        ];
    }
}
