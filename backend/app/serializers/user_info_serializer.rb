class UserInfoSerializer < ActiveModel::Serializer
  attributes :id, :goal, :bodyType, :img, :gender, :height, :name, :weight

  def weight
    if object.weights.length > 0
      object.weights.max { |w1, w2| w1.date <=> w2.date }.weight
    end
  end
end
