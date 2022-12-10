class ApplicationController < ActionController::Base
  around_action :switch_locale

  def switch_locale(&action)
    locale = extract_locale_from_accept_language_header.to_sym
    validate_locale(locale)
    locale = I18n.locale unless locale_supported?(locale)
    logger.debug "* Locale set to '#{locale}'"
    I18n.with_locale(locale, &action)
  end

  private

  def extract_locale_from_accept_language_header
    request.env['HTTP_ACCEPT_LANGUAGE'].scan(/^[a-z]{2}/).first
  end

  def validate_locale(locale)
    if locale_supported?(locale)
      logger.debug "* Accept-Language: #{request.env['HTTP_ACCEPT_LANGUAGE']}"
    else
      logger.debug "* Language-Not-Supported: #{request.env['HTTP_ACCEPT_LANGUAGE']}"
    end
  end

  def locale_supported?(locale)
    I18n.available_locales.include? locale
  end
end
