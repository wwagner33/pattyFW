require 'test_helper'

class ContextUsersControllerTest < ActionDispatch::IntegrationTest
  setup do
    @context_user = context_users(:one)
  end

  test "should get index" do
    get context_users_url
    assert_response :success
  end

  test "should get new" do
    get new_context_user_url
    assert_response :success
  end

  test "should create context_user" do
    assert_difference('ContextUser.count') do
      post context_users_url, params: { context_user: { local: @context_user.local, user: @context_user.user, useractivity: @context_user.useractivity } }
    end

    assert_redirected_to context_user_url(ContextUser.last)
  end

  test "should show context_user" do
    get context_user_url(@context_user)
    assert_response :success
  end

  test "should get edit" do
    get edit_context_user_url(@context_user)
    assert_response :success
  end

  test "should update context_user" do
    patch context_user_url(@context_user), params: { context_user: { local: @context_user.local, user: @context_user.user, useractivity: @context_user.useractivity } }
    assert_redirected_to context_user_url(@context_user)
  end

  test "should destroy context_user" do
    assert_difference('ContextUser.count', -1) do
      delete context_user_url(@context_user)
    end

    assert_redirected_to context_users_url
  end
end
