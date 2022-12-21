class ApplicationController < ActionController::Base
  # around_action :use_locale

  # def use_locale(&block)
  #   cookies.permanent[:locale] = cookies[:locale] || I18n.default_locale
  #   I18n.with_locale(cookies_locale, &block)
  # end

  # def cookies_locale
  #   @cookies_locale ||= cookies[:locale].to_sym
  # end
end
