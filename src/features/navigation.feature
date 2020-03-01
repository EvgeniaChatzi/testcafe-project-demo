Feature: Navigation
        @test
        # Background: Navigate to Let's Kode It website
        #     Given I navigate to Let's Kode It website
        
        Scenario: Navigate to Courses Page
            Given I navigate to Let's Kode It website
             When I click on the "Courses" Page button in the Navigation bar
             Then I am on Courses page
