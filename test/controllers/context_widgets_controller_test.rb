require 'test_helper'

class ContextWidgetsControllerTest < ActionDispatch::IntegrationTest
  setup do
    @context_widget = context_widgets(:one)
  end

  test "should get index" do
    get context_widgets_url
    assert_response :success
  end

  test "should get new" do
    get new_context_widget_url
    assert_response :success
  end

  test "should create context_widget" do
    assert_difference('ContextWidget.count') do
      post context_widgets_url, params: { context_widget: { labwidget: @context_widget.labwidget, useractivity: @context_widget.useractivity, value: @context_widget.value } }
    end

    assert_redirected_to context_widget_url(ContextWidget.last)
  end

  test "should show context_widget" do
    get context_widget_url(@context_widget)
    assert_response :success
  end

  test "should get edit" do
    get edit_context_widget_url(@context_widget)
    assert_response :success
  end

  test "should update context_widget" do
    patch context_widget_url(@context_widget), params: { context_widget: { labwidget: @context_widget.labwidget, useractivity: @context_widget.useractivity, value: @context_widget.value } }
    assert_redirected_to context_widget_url(@context_widget)
  end

  test "should destroy context_widget" do
    assert_difference('ContextWidget.count', -1) do
      delete context_widget_url(@context_widget)
    end

    assert_redirected_to context_widgets_url
  end
end
