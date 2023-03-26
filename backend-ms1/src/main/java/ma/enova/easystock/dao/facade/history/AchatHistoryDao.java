package ma.enova.easystock.dao.facade.history;

import ma.enova.easystock.zynerator.repository.AbstractHistoryRepository;
import ma.enova.easystock.bean.history.AchatHistory;
import org.springframework.stereotype.Repository;

@Repository
public interface AchatHistoryDao extends AbstractHistoryRepository<AchatHistory,Long> {

}
