class LikeSerializer < ActiveModel::Serializer
    attributes :like_count, :post, :user
end