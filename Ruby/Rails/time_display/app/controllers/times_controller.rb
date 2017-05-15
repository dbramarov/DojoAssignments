class TimesController < ApplicationController
  def main
  	@currentTime = Time.now.strftime("%b %d, %Y %H:%M")
  end
end
