class UserInfoSerializer < ActiveModel::Serializer
  attributes :id, :height, :weight

  def weight
    object.weights.max { |w1, w2| w1.date <=> w2.date }.weight
  end
end
