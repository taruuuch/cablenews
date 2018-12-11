<?php

namespace app\models;

use Yii;

/**
 * This is the model class for table "video".
 *
 * @property int $id
 * @property string $title
 * @property string $youtube
 * @property string $description
 * @property string $author
 * @property string $publication
 * @property string $tags
 */
class Video extends \yii\db\ActiveRecord
{
    /**
     * {@inheritdoc}
     */
    public static function tableName()
    {
        return 'video';
    }

    /**
     * {@inheritdoc}
     */
    public function rules()
    {
        return [
            [['title', 'youtube', 'description', 'author', 'publication', 'tags'], 'required'],
            [['title', 'youtube', 'description', 'author', 'tags'], 'string'],
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
            'title' => 'Title',
            'youtube' => 'Youtube',
            'description' => 'Description',
            'author' => 'Author',
            'publication' => 'Publication',
            'tags' => 'Tags',
        ];
    }
}
